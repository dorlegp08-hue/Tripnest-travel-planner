import React, { useState, useRef, useEffect } from 'react';
import {
  SlidersHorizontal, RotateCcw, ChevronDown,
  Sun, CloudRain, Snowflake, Thermometer,
  Mountain, Palmtree, Landmark, Building, Zap,
  Check
} from 'lucide-react';
import { useFilterStore } from '../../store/useFilterStore';
import { WeatherType, BudgetLevel, DestinationType } from '../../types/destination';

/* ─── option definitions ─────────────────────────────────────── */

const weatherOptions: { type: WeatherType; label: string; icon: React.FC<{ className?: string }> }[] = [
  { type: 'sunny',  label: 'Sunny',  icon: Sun },
  { type: 'rainy',  label: 'Rainy',  icon: CloudRain },
  { type: 'snowy',  label: 'Snowy',  icon: Snowflake },
  { type: 'mild',   label: 'Mild',   icon: Thermometer },
];

const budgetOptions: { level: BudgetLevel; label: string; desc: string }[] = [
  { level: 'low',    label: 'Low Budget',     desc: '< ₹2,000 / day' },
  { level: 'medium', label: 'Medium Budget',  desc: '₹2,000 – ₹4,000 / day' },
  { level: 'high',   label: 'High / Luxury',  desc: '> ₹4,000 / day' },
];

const typeOptions: { type: DestinationType; label: string; icon: React.FC<{ className?: string }> }[] = [
  { type: 'mountains', label: 'Mountains', icon: Mountain },
  { type: 'beaches',   label: 'Beaches',   icon: Palmtree  },
  { type: 'heritage',  label: 'Heritage',  icon: Landmark  },
  { type: 'city',      label: 'City Life', icon: Building  },
  { type: 'adventure', label: 'Adventure', icon: Zap       },
];

/* ─── generic dropdown wrapper ───────────────────────────────── */

interface DropdownProps {
  label: string;
  activeCount: number;
  children: React.ReactNode;
  id: string;
}

const FilterDropdown: React.FC<DropdownProps> = ({ label, activeCount, children, id }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative" id={id}>
      {/* Pill trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-sm font-semibold transition-all select-none ${
          open || activeCount > 0
            ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
            : 'bg-white dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-brand-400 dark:hover:border-brand-500'
        }`}
      >
        <span>{label}</span>
        {activeCount > 0 && (
          <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded-full bg-white/25 text-white">
            {activeCount}
          </span>
        )}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute top-full left-0 mt-2 z-50 min-w-[220px] rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/10 dark:shadow-slate-950/40 p-3 space-y-1 animate-fade-in-down"
        >
          {children}
        </div>
      )}
    </div>
  );
};

/* ─── individual option rows ─────────────────────────────────── */

interface OptionRowProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: React.FC<{ className?: string }>;
  desc?: string;
}

const OptionRow: React.FC<OptionRowProps> = ({ label, isSelected, onClick, icon: Icon, desc }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
      isSelected
        ? 'bg-brand-50 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400'
        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
    }`}
  >
    <div className="flex items-center gap-2.5">
      {Icon && <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-500' : 'text-slate-400'}`} />}
      <span>{label}</span>
      {desc && <span className={`text-[11px] ml-1 ${isSelected ? 'text-brand-400' : 'text-slate-400'}`}>{desc}</span>}
    </div>
    <div
      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
        isSelected ? 'border-brand-500 bg-brand-500' : 'border-slate-300 dark:border-slate-600'
      }`}
    >
      {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
    </div>
  </button>
);

/* ─── main export ────────────────────────────────────────────── */

export const FilterDropdownBar: React.FC = () => {
  const {
    selectedWeather,
    selectedBudget,
    selectedTypes,
    toggleWeatherFilter,
    toggleBudgetFilter,
    toggleTypeFilter,
    resetFilters,
  } = useFilterStore();

  const activeFilterCount = selectedWeather.length + selectedBudget.length + selectedTypes.length;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Icon */}
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
        <SlidersHorizontal className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Filters</span>
      </div>

      {/* Weather dropdown */}
      <FilterDropdown label="Weather" activeCount={selectedWeather.length} id="filter-dropdown-weather">
        {weatherOptions.map((opt) => (
          <OptionRow
            key={opt.type}
            label={opt.label}
            isSelected={selectedWeather.includes(opt.type)}
            onClick={() => toggleWeatherFilter(opt.type)}
            icon={opt.icon}
          />
        ))}
      </FilterDropdown>

      {/* Destination Type dropdown */}
      <FilterDropdown label="Destination Type" activeCount={selectedTypes.length} id="filter-dropdown-type">
        {typeOptions.map((opt) => (
          <OptionRow
            key={opt.type}
            label={opt.label}
            isSelected={selectedTypes.includes(opt.type)}
            onClick={() => toggleTypeFilter(opt.type)}
            icon={opt.icon}
          />
        ))}
      </FilterDropdown>

      {/* Daily Budget dropdown */}
      <FilterDropdown label="Daily Budget" activeCount={selectedBudget.length} id="filter-dropdown-budget">
        {budgetOptions.map((opt) => (
          <OptionRow
            key={opt.level}
            label={opt.label}
            isSelected={selectedBudget.includes(opt.level)}
            onClick={() => toggleBudgetFilter(opt.level)}
            desc={opt.desc}
          />
        ))}
      </FilterDropdown>

      {/* Reset button — only show when filters are active */}
      {activeFilterCount > 0 && (
        <button
          onClick={resetFilters}
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-2xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 border border-slate-200 dark:border-slate-700 hover:border-brand-400 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear all ({activeFilterCount})</span>
        </button>
      )}
    </div>
  );
};
