import React from 'react';
import { Layers, X, Plus, Star, MapPin, Sun, CloudRain, Snowflake, Thermometer } from 'lucide-react';
import { useComparisonStore } from '../../store/useComparisonStore';
import { mockDestinations } from '../../data/destinations';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

export const DestinationComparison: React.FC = () => {
  const { destinationIds, removeDestination, clearComparison } = useComparisonStore();
  const navigate = useNavigate();

  const selectedDestinations = destinationIds
    .map((id) => mockDestinations.find((d) => d.id === id))
    .filter(Boolean);

  const weatherIcons = {
    sunny: Sun,
    rainy: CloudRain,
    snowy: Snowflake,
    mild: Thermometer
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
              Side-by-Side Destination Matrix
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Compare up to 3 destinations across pricing, rating, climate, best season, and crowd density.
            </p>
          </div>
        </div>

        {selectedDestinations.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearComparison}
            className="self-start sm:self-auto text-xs"
          >
            Clear Selection
          </Button>
        )}
      </div>

      {selectedDestinations.length === 0 ? (
        <div className="text-center py-12 px-4 bg-white dark:bg-darkBg-card rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
          <Layers className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
            No Destinations Added to Compare
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Browse destinations on the Discover or Home page and click "Add to Compare" to compare them here.
          </p>
          <Button
            variant="primary"
            size="sm"
            icon={<Plus className="w-4 h-4" />}
            onClick={() => navigate('/search')}
            className="mx-auto"
          >
            Explore Destinations
          </Button>
        </div>
      ) : (
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[700px] grid grid-cols-4 gap-4 bg-white dark:bg-darkBg-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            
            {/* Row 0: Labels Header */}
            <div className="space-y-6 pt-16 text-xs font-bold text-slate-400 border-r border-slate-100 dark:border-slate-800 pr-4">
              <div className="h-8 flex items-center">State & Type</div>
              <div className="h-8 flex items-center">Rating Score</div>
              <div className="h-8 flex items-center">Est. Daily Budget</div>
              <div className="h-8 flex items-center">Weather Climate</div>
              <div className="h-8 flex items-center">Crowd Density</div>
              <div className="h-8 flex items-center">Best Season</div>
            </div>

            {/* Destination Columns */}
            {selectedDestinations.map((dest) => {
              if (!dest) return null;
              const WeatherIcon = weatherIcons[dest.weather];

              return (
                <div key={dest.id} className="space-y-6 text-xs">
                  {/* Top Image Card */}
                  <div className="relative rounded-2xl overflow-hidden h-36 border border-slate-200 dark:border-slate-800 shadow">
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <button
                      onClick={() => removeDestination(dest.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-slate-950/60 text-white hover:bg-red-500 transition-colors"
                      title="Remove"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    <div className="absolute bottom-2 left-2 text-white">
                      <h4 className="font-bold text-base font-display">{dest.name}</h4>
                    </div>
                  </div>

                  {/* Attribute Rows */}
                  <div className="h-8 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{dest.state}</span>
                    <Badge variant="brand" size="sm">{dest.type}</Badge>
                  </div>

                  <div className="h-8 flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{dest.rating.toFixed(1)} / 5.0</span>
                  </div>

                  <div className="h-8 flex items-center">
                    <span className="font-extrabold text-brand-600 dark:text-brand-400 text-sm">
                      ₹{dest.pricePerDay} <span className="text-[10px] font-normal text-slate-400">/ day</span>
                    </span>
                  </div>

                  <div className="h-8 flex items-center">
                    <Badge variant={dest.weather} icon={<WeatherIcon className="w-3.5 h-3.5" />}>
                      {dest.weather}
                    </Badge>
                  </div>

                  <div className="h-8 flex items-center">
                    <Badge variant={dest.crowdLevel}>
                      {dest.crowdLevel} density
                    </Badge>
                  </div>

                  <div className="h-8 flex items-center text-slate-700 dark:text-slate-300 font-medium">
                    {dest.bestSeason}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      )}

    </div>
  );
};
