import React from 'react';
import { MapPin, Star, Sun, CloudRain, Snowflake, Thermometer } from 'lucide-react';
import { Destination } from '../../types/destination';
import { Badge } from '../common/Badge';

interface MapDestinationListProps {
  destinations: Destination[];
  selectedId: string | null;
  onSelectDestination: (dest: Destination) => void;
  onOpenModal: (dest: Destination) => void;
}

export const MapDestinationList: React.FC<MapDestinationListProps> = ({
  destinations,
  selectedId,
  onSelectDestination,
  onOpenModal
}) => {
  const weatherIcons = {
    sunny: Sun,
    rainy: CloudRain,
    snowy: Snowflake,
    mild: Thermometer
  };

  return (
    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
      {destinations.map((dest) => {
        const WeatherIcon = weatherIcons[dest.weather];
        const isSelected = selectedId === dest.id;

        return (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
              isSelected
                ? 'bg-brand-50 dark:bg-brand-900/30 border-brand-500 shadow-md scale-[1.01]'
                : 'bg-white dark:bg-darkBg-card border-slate-200 dark:border-slate-800 hover:border-brand-300'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={dest.imageUrl}
                alt={dest.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm"
              />

              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm font-display text-slate-900 dark:text-white truncate">
                    {dest.name}
                  </h4>
                  <Badge variant={dest.crowdLevel} size="sm">
                    {dest.crowdLevel}
                  </Badge>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 text-brand-500 shrink-0" />
                  {dest.state}
                </p>

                <div className="flex items-center gap-2 pt-0.5 text-[11px]">
                  <span className="font-semibold text-brand-600 dark:text-brand-400">₹{dest.pricePerDay}/day</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" /> {dest.rating}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(dest);
              }}
              className="px-2.5 py-1.5 text-[11px] font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-500 hover:text-white transition-colors shrink-0"
            >
              Specs
            </button>
          </div>
        );
      })}
    </div>
  );
};
