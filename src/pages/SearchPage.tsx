import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockDestinations } from '../data/destinations';
import { Destination } from '../types/destination';
import { useFilterStore } from '../store/useFilterStore';
import { useDebounce } from '../hooks/useDebounce';
import { FilterSidebar } from '../components/search/FilterSidebar';
import { SortControls } from '../components/search/SortControls';
import { DestinationGrid } from '../components/search/DestinationGrid';
import { DestinationDetailModal } from '../components/common/DestinationDetailModal';

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const {
    searchQuery,
    setSearchQuery,
    selectedWeather,
    selectedBudget,
    selectedTypes,
    sortBy
  } = useFilterStore();

  // Sync URL ?q= query string to store on load
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams, setSearchQuery]);

  const debouncedSearch = useDebounce(searchQuery, 250);

  // Client-side real filtering logic
  const filteredDestinations = useMemo(() => {
    return mockDestinations.filter((dest) => {
      // Debounced search text match on name, state, country, or description
      if (debouncedSearch) {
        const term = debouncedSearch.toLowerCase();
        const matchesName = dest.name.toLowerCase().includes(term);
        const matchesState = dest.state.toLowerCase().includes(term);
        const matchesDesc = dest.description.toLowerCase().includes(term);
        const matchesType = dest.type.toLowerCase().includes(term);
        if (!matchesName && !matchesState && !matchesDesc && !matchesType) return false;
      }

      // Weather filter
      if (selectedWeather.length > 0 && !selectedWeather.includes(dest.weather)) {
        return false;
      }

      // Budget filter
      if (selectedBudget.length > 0 && !selectedBudget.includes(dest.budgetLevel)) {
        return false;
      }

      // Destination type filter
      if (selectedTypes.length > 0 && !selectedTypes.includes(dest.type)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricePerDay - b.pricePerDay;
      if (sortBy === 'price-desc') return b.pricePerDay - a.pricePerDay;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.rating - a.rating; // default popularity by rating
    });
  }, [debouncedSearch, selectedWeather, selectedBudget, selectedTypes, sortBy]);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Top Banner & Search Input */}
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          Explore Indian Destinations
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Filter 18 real destinations across weather, budget tiers, and activity types with live client-side search.
        </p>

        {/* Search Bar Input */}
        <div className="relative max-w-2xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by destination name, state, or keywords (e.g. Goa, snow, beach)..."
            className="w-full pl-11 pr-10 py-3.5 text-sm rounded-2xl bg-white dark:bg-darkBg-card text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
          />
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block md:col-span-1">
          <FilterSidebar className="sticky top-28" />
        </div>

        {/* Mobile Filter Toggle Trigger Button */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 text-white font-bold text-xs shadow-md"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter & Categories</span>
          </button>
        </div>

        {/* Main Grid Section */}
        <div className="md:col-span-3 space-y-6">
          <SortControls matchingCount={filteredDestinations.length} />
          <DestinationGrid
            destinations={filteredDestinations}
            onSelectDestination={setSelectedDestination}
          />
        </div>

      </div>

      {/* Mobile Drawer Slide-in */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-4/5 max-w-sm h-full bg-white dark:bg-darkBg-card p-6 overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Filters</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <FilterSidebar onCloseMobile={() => setIsMobileFilterOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Quick Specs Detail Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
};
