import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Compass, Sparkles, MapPin, ShieldCheck, Sun } from 'lucide-react';
import { Button } from '../common/Button';
import { useFilterStore } from '../../store/useFilterStore';

export const HeroSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const setSearchQuery = useFilterStore((s) => s.setSearchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchQuery(query.trim());
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/search');
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Travel Hero"
          className="w-full h-full object-cover scale-105 filter brightness-[0.65] dark:brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40" />
      </div>

      {/* Floating Animated Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent-coral/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 text-white">
        
        {/* Header Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest text-brand-300 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Next-Gen Travel Itinerary Planner</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.15]"
        >
          Discover & Plan Your Ideal <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-brand-300 via-sky-200 to-accent-coral bg-clip-text text-transparent">
            Indian Travel Escapes
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Smart weather-aware destination discovery, day-by-day itinerary building, live Leaflet maps, and instant budget tools.
        </motion.p>

        {/* Search Input Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="p-2 sm:p-2.5 rounded-2xl sm:rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 shadow-2xl flex flex-col sm:flex-row items-center gap-3 text-slate-900 dark:text-white"
          >
            <div className="flex items-center gap-3 px-4 py-2 w-full">
              <Search className="w-5 h-5 text-brand-500 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Where do you want to go? (e.g., Goa, Manali, Jaipur)..."
                className="w-full bg-transparent text-sm focus:outline-none placeholder-slate-400 dark:placeholder-slate-500 font-medium"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto rounded-xl sm:rounded-full px-8 py-3 shrink-0"
              icon={<Compass className="w-5 h-5" />}
            >
              Plan Your Trip
            </Button>
          </form>
        </motion.div>

        {/* Stats Pill Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-300"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-400" />
            <span>18+ Handpicked Indian Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Live Weather & Climate Insights</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Free & Client-Side</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
