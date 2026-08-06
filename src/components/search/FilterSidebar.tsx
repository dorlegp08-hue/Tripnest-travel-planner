import React from 'react';
import { SlidersHorizontal, RotateCcw, Sun, CloudRain, Snowflake, Thermometer, Mountain, Palmtree, Landmark, Building, Zap } from 'lucide-react';
import { useFilterStore } from '../../store/useFilterStore';
import { WeatherType, BudgetLevel, DestinationType } from '../../types/destination';
import { Button } from '../common/Button';

interface FilterSidebarProps {
  className?: string;
  onCloseMobile?: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ className = '', onCloseMobile }) => {
  const {
    selectedWeather,
    selectedBudget,
    selectedTypes,
    toggleWeatherFilter,
    toggleBudgetFilter,
    toggleTypeFilter,
    resetFilters
  } = useFilterStore();

  const weatherOptions: { type: WeatherType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { type: 'sunny', label: 'Sunny', icon: Sun },
    { type: 'rainy', label: 'Rainy', icon: CloudRain },
    { type: 'snowy', label: 'Snowy', icon: Snowflake },
    { type: 'mild', label: 'Mild', icon: Thermometer }
  ];

  const budgetOptions: { level: BudgetLevel; label: string; desc: string }[] = [
    { level: 'low', label: 'Low Budget', desc: '< ₹2,000 / day' },
    { level: 'medium', label: 'Medium Budget', desc: '₹2,000 - ₹4,000 / day' },
    { level: 'high', label: 'High / Luxury', desc: '> ₹4,000 / day' }
  ];

  const typeOptions: { type: DestinationType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { type: 'mountains', label: 'Mountains', icon: Mountain },
    { type: 'beaches', label: 'Beaches', icon: Palmtree },
    { type: 'heritage', label: 'Heritage', icon: Landmark },
    { type: 'city', label: 'City Life', icon: Building },
    { type: 'adventure', label: 'Adventure', icon: Zap }
  ];

  const activeFilterCount = selectedWeather.length + selectedBudget.length + selectedTypes.length;

  return (
    <aside className={`space-y-6 ${className}`}>
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-brand-500" />
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Filter Places</h3>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-bold bg-brand-500 text-white rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Weather Filter Group */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Weather Climate</h4>
        <div className="grid grid-cols-2 gap-2">
          {weatherOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedWeather.includes(opt.type);
            return (
              <button
                key={opt.type}
                onClick={() => toggleWeatherFilter(opt.type)}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Destination Type Group */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Destination Type</h4>
        <div className="space-y-2">
          {typeOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedTypes.includes(opt.type);
            return (
              <button
                key={opt.type}
                onClick={() => toggleTypeFilter(opt.type)}
                className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-brand-500'}`} />
                  <span>{opt.label}</span>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-white bg-white/20' : 'border-slate-300 dark:border-slate-600'}`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Filter Group */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Est. Daily Budget</h4>
        <div className="space-y-2">
          {budgetOptions.map((opt) => {
            const isSelected = selectedBudget.includes(opt.level);
            return (
              <button
                key={opt.level}
                onClick={() => toggleBudgetFilter(opt.level)}
                className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs text-left transition-all ${
                  isSelected
                    ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div>
                  <span className="font-bold block">{opt.label}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>{opt.desc}</span>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-white bg-white/20' : 'border-slate-300 dark:border-slate-600'}`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {onCloseMobile && (
        <div className="pt-4 md:hidden">
          <Button variant="primary" className="w-full" onClick={onCloseMobile}>
            Apply Filters
          </Button>
        </div>
      )}
    </aside>
  );
};
