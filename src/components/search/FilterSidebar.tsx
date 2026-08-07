import React, { useState } from 'react';
import {
  SlidersHorizontal, RotateCcw, ChevronDown, Check,
  Sun, CloudRain, Snowflake, Thermometer,
  Mountain, Palmtree, Landmark, Building, Zap
} from 'lucide-react';
import { useFilterStore } from '../../store/useFilterStore';
import { WeatherType, BudgetLevel, DestinationType } from '../../types/destination';
import { Button } from '../common/Button';

interface FilterSidebarProps {
  className?: string;
  onCloseMobile?: () => void;
}

/* ─── Accordion section ──────────────────────────────────────── */

interface AccordionProps {
  title: string;
  activeCount: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionProps> = ({ title, activeCount, defaultOpen = true, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 dark:border-slate-700/60 rounded-2xl overflow-hidden">
      {/* Header / trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
          open
            ? 'bg-slate-50 dark:bg-slate-800/60'
            : 'bg-white dark:bg-slate-800/30 hover:bg-slate-50 dark:hover:bg-slate-800/50'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            {title}
          </span>
          {activeCount > 0 && (
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-brand-500 text-white rounded-full leading-none">
              {activeCount}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Collapsible content */}
      {open && (
        <div className="px-3 py-3 bg-white dark:bg-slate-900/40 space-y-1.5">
          {children}
        </div>
      )}
    </div>
  );
};

/* ─── Option row inside accordion ────────────────────────────── */

interface OptionRowProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: React.FC<{ className?: string }>;
  desc?: string;
  weatherDataAttr?: string;
}

const OptionRow: React.FC<OptionRowProps> = ({ label, isSelected, onClick, icon: Icon, desc, weatherDataAttr }) => (
  <button
    onClick={onClick}
    data-weather-type={weatherDataAttr}
    className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
      isSelected
        ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/20'
        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700/60'
    }`}
  >
    <div className="flex items-center gap-2.5">
      {Icon && <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-brand-500 dark:text-brand-400'}`} />}
      <div className="text-left">
        <span className="block">{label}</span>
        {desc && (
          <span className={`text-[10px] font-normal ${isSelected ? 'text-white/75' : 'text-slate-400'}`}>
            {desc}
          </span>
        )}
      </div>
    </div>
    <div
      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
        isSelected ? 'border-white bg-white/25' : 'border-slate-300 dark:border-slate-600'
      }`}
    >
      {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
    </div>
  </button>
);

/* ─── Main export ────────────────────────────────────────────── */

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
    { type: 'sunny', label: 'Sunny',  icon: Sun },
    { type: 'rainy', label: 'Rainy',  icon: CloudRain },
    { type: 'snowy', label: 'Snowy',  icon: Snowflake },
    { type: 'mild',  label: 'Mild',   icon: Thermometer },
  ];

  const budgetOptions: { level: BudgetLevel; label: string; desc: string }[] = [
    { level: 'low',    label: 'Low Budget',    desc: '< ₹2,000 / day' },
    { level: 'medium', label: 'Medium Budget', desc: '₹2,000 – ₹4,000 / day' },
    { level: 'high',   label: 'High / Luxury', desc: '> ₹4,000 / day' },
  ];

  const typeOptions: { type: DestinationType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { type: 'mountains', label: 'Mountains', icon: Mountain },
    { type: 'beaches',   label: 'Beaches',   icon: Palmtree  },
    { type: 'heritage',  label: 'Heritage',  icon: Landmark  },
    { type: 'city',      label: 'City Life', icon: Building  },
    { type: 'adventure', label: 'Adventure', icon: Zap       },
  ];

  const activeFilterCount = selectedWeather.length + selectedBudget.length + selectedTypes.length;

  return (
    <aside className={`space-y-3 ${className}`}>

      {/* Sidebar header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
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

      {/* Weather accordion */}
      <AccordionSection title="Weather Climate" activeCount={selectedWeather.length} defaultOpen={true}>
        {weatherOptions.map((opt) => (
          <OptionRow
            key={opt.type}
            label={opt.label}
            isSelected={selectedWeather.includes(opt.type)}
            onClick={() => toggleWeatherFilter(opt.type)}
            icon={opt.icon}
            weatherDataAttr={opt.type}
          />
        ))}
      </AccordionSection>

      {/* Destination Type accordion */}
      <AccordionSection title="Destination Type" activeCount={selectedTypes.length} defaultOpen={true}>
        {typeOptions.map((opt) => (
          <OptionRow
            key={opt.type}
            label={opt.label}
            isSelected={selectedTypes.includes(opt.type)}
            onClick={() => toggleTypeFilter(opt.type)}
            icon={opt.icon}
          />
        ))}
      </AccordionSection>

      {/* Budget accordion */}
      <AccordionSection title="Est. Daily Budget" activeCount={selectedBudget.length} defaultOpen={true}>
        {budgetOptions.map((opt) => (
          <OptionRow
            key={opt.level}
            label={opt.label}
            isSelected={selectedBudget.includes(opt.level)}
            onClick={() => toggleBudgetFilter(opt.level)}
            desc={opt.desc}
          />
        ))}
      </AccordionSection>

      {onCloseMobile && (
        <div className="pt-2 md:hidden">
          <Button variant="primary" className="w-full" onClick={onCloseMobile}>
            Apply Filters
          </Button>
        </div>
      )}
    </aside>
  );
};
