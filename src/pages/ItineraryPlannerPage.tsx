import React from 'react';
import { ItineraryBuilder } from '../components/itinerary/ItineraryBuilder';
import { Calendar } from 'lucide-react';

export const ItineraryPlannerPage: React.FC = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-500">
          <Calendar className="w-4 h-4 text-brand-500" />
          <span>Interactive Planner</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          Itinerary Planner
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
          Build day-by-day trip schedules, reorder activities, manage costs, and save your trip directly in your browser.
        </p>
      </div>

      <ItineraryBuilder />
    </div>
  );
};
