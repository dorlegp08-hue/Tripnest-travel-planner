import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useFilterStore, SortOption } from '../../store/useFilterStore';

interface SortControlsProps {
  matchingCount: number;
}

export const SortControls: React.FC<SortControlsProps> = ({ matchingCount }) => {
  const { sortBy, setSortBy } = useFilterStore();

  const options: { value: SortOption; label: string }[] = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rating' }
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
      <div>
        <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white">
          Discover Places
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Showing <span className="font-bold text-brand-600 dark:text-brand-400">{matchingCount}</span> destinations matching your criteria
        </p>
      </div>

      <div className="flex items-center gap-2">
        <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0" />
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="px-3 py-2 text-xs font-bold rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
