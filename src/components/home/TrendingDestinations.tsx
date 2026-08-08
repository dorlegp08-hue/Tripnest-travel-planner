import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight, Sun, CloudRain, Snowflake, Thermometer } from 'lucide-react';
import { mockDestinations } from '../../data/destinations';
import { Destination } from '../../types/destination';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { DestinationDetailModal } from '../common/DestinationDetailModal';

export const TrendingDestinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Summer' | 'Winter' | 'Monsoon'>('All');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const filterDestinationsByTab = () => {
    if (activeTab === 'All') return mockDestinations.slice(0, 8);
    if (activeTab === 'Summer') return mockDestinations.filter((d) => d.weather === 'snowy' || d.weather === 'mild').slice(0, 6);
    if (activeTab === 'Winter') return mockDestinations.filter((d) => d.weather === 'sunny' || d.weather === 'mild').slice(0, 6);
    if (activeTab === 'Monsoon') return mockDestinations.filter((d) => d.weather === 'rainy' || d.type === 'mountains').slice(0, 6);
    return mockDestinations.slice(0, 8);
  };

  const displayedDestinations = filterDestinationsByTab();

  const weatherIcons = {
    sunny: Sun,
    rainy: CloudRain,
    snowy: Snowflake,
    mild: Thermometer
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-black mb-2 block">
            Popular Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            Trending Indian Escapes
          </h2>
        </div>

        {/* Season Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-2xl overflow-x-auto self-start md:self-auto">
          {(['All', 'Summer', 'Winter', 'Monsoon'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-white dark:bg-darkBg-card text-brand-600 dark:text-brand-400 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab} {tab !== 'All' ? 'Picks' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedDestinations.map((dest, idx) => {
          const WeatherIcon = weatherIcons[dest.weather];
          return (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card
                hoverEffect
                onClick={() => setSelectedDestination(dest)}
                className="group h-full flex flex-col justify-between overflow-hidden p-0 border-slate-200/80 dark:border-slate-800"
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/destination-fallback.svg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant={dest.weather} icon={<WeatherIcon className="w-3 h-3" />}>
                      {dest.weather}
                    </Badge>
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 text-slate-800 dark:text-slate-100 shadow">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{dest.rating.toFixed(1)}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs text-brand-200 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {dest.state}
                    </p>
                    <h3 className="text-xl font-bold font-display leading-snug">{dest.name}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Daily Budget</span>
                      <span className="text-sm font-extrabold text-brand-600 dark:text-brand-400">₹{dest.pricePerDay}</span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-500 group-hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Quick View Detail Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </section>
  );
};
