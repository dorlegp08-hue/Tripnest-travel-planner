import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Sun, CloudRain, Snowflake, Thermometer, ArrowUpRight } from 'lucide-react';
import { Destination } from '../../types/destination';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (dest: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
  const weatherIcons = {
    sunny: Sun,
    rainy: CloudRain,
    snowy: Snowflake,
    mild: Thermometer
  };

  const WeatherIcon = weatherIcons[destination.weather];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        hoverEffect
        onClick={() => onSelect(destination)}
        className="group h-full flex flex-col justify-between p-0 overflow-hidden border-slate-200/80 dark:border-slate-800"
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/destination-fallback.svg';
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <Badge variant="brand" className="bg-slate-900/80 text-white backdrop-blur-md text-[10px]">
              {destination.type.toUpperCase()}
            </Badge>
            <Badge variant={destination.weather} icon={<WeatherIcon className="w-3 h-3" />} size="sm">
              {destination.weather}
            </Badge>
          </div>

          <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 text-slate-800 dark:text-slate-100 shadow">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{destination.rating.toFixed(1)}</span>
          </div>

          <div className="absolute bottom-3 left-3 text-[#E6FCFF]">
            <div className="flex items-center gap-1 text-[#E6FCFF]/90 text-xs font-medium">
              <MapPin className="w-3 h-3 text-[#E6FCFF]" />
              <span>{destination.state}</span>
            </div>
            <h3 className="text-xl font-bold font-display leading-tight text-[#E6FCFF]">{destination.name}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {destination.description}
          </p>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Estimated Cost</span>
              <span className="text-sm font-extrabold text-brand-600 dark:text-brand-400">₹{destination.pricePerDay} <span className="text-[10px] font-normal text-slate-400">/ day</span></span>
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              View Quick Specs <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
