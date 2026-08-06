import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { SearchX, RotateCcw } from 'lucide-react';
import { Destination } from '../../types/destination';
import { DestinationCard } from './DestinationCard';
import { Button } from '../common/Button';
import { useFilterStore } from '../../store/useFilterStore';

interface DestinationGridProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationGrid: React.FC<DestinationGridProps> = ({
  destinations,
  onSelectDestination
}) => {
  const resetFilters = useFilterStore((s) => s.resetFilters);

  if (destinations.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white dark:bg-darkBg-card rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-500 flex items-center justify-center mx-auto">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
          No Destinations Found
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          We couldn't find any places matching your current weather, budget, or category filters.
        </p>
        <Button
          variant="outline"
          size="sm"
          icon={<RotateCcw className="w-4 h-4" />}
          onClick={resetFilters}
          className="mx-auto"
        >
          Reset All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            onSelect={onSelectDestination}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
