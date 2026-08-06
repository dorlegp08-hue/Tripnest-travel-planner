import React from 'react';
import { Sun, CloudRain, Snowflake, Thermometer } from 'lucide-react';

export const MapLegend: React.FC = () => {
  return (
    <div className="bg-white/90 dark:bg-darkBg-card/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-lg text-xs space-y-3">
      <h4 className="font-bold font-display text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
        Map Legend & Indicators
      </h4>

      {/* Crowd Level Color Coding */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold text-slate-400 block uppercase">Crowd Density Tag</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-slate-600 dark:text-slate-300">Low</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="text-slate-600 dark:text-slate-300">Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="text-slate-600 dark:text-slate-300">High</span>
          </div>
        </div>
      </div>

      {/* Weather Icon Key */}
      <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
        <span className="text-[10px] font-bold text-slate-400 block uppercase">Weather Climate</span>
        <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <Sun className="w-3.5 h-3.5 text-amber-500" /> Sunny
          </div>
          <div className="flex items-center gap-1.5">
            <CloudRain className="w-3.5 h-3.5 text-blue-500" /> Rainy
          </div>
          <div className="flex items-center gap-1.5">
            <Snowflake className="w-3.5 h-3.5 text-sky-400" /> Snowy
          </div>
          <div className="flex items-center gap-1.5">
            <Thermometer className="w-3.5 h-3.5 text-emerald-500" /> Mild
          </div>
        </div>
      </div>
    </div>
  );
};
