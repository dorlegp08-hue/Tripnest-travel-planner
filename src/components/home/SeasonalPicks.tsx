import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Compass, Sparkles, MapPin } from 'lucide-react';
import { mockDestinations } from '../../data/destinations';
import { Destination } from '../../types/destination';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { DestinationDetailModal } from '../common/DestinationDetailModal';

export const SeasonalPicks: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Pick 3 high-rated diverse seasonal destinations
  const seasonalList = [
    mockDestinations.find((d) => d.id === 'leh')!,
    mockDestinations.find((d) => d.id === 'udaipur')!,
    mockDestinations.find((d) => d.id === 'munnar')!
  ].filter(Boolean);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div 
        className="rounded-3xl p-8 sm:p-12 text-slate-900 dark:text-white relative overflow-hidden shadow-2xl border border-white/40 dark:border-teal-500/20 bg-gradient-to-tr from-[#89CFF0] via-[#B892FF] to-[#FFB6E6] dark:from-[#16353C] dark:via-[#1E2D3A] dark:to-[#2A2635]"
      >
        
        {/* Background glow overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-[#E6FCFF] bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-3 py-1 rounded-full mb-2 border border-white/50 dark:border-slate-700/50">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Curated Recommendation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
                Top Seasonal Highlights
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium max-w-md bg-white/30 dark:bg-slate-900/40 backdrop-blur-sm p-3 rounded-xl border border-white/40 dark:border-slate-700/40">
              Handpicked destinations offering peak weather conditions, breathtaking landscapes, and optimal crowd density right now.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalList.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative site-card neon-glass-hover rounded-2xl p-4 shadow-lg flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="brand" className="bg-slate-900/80 text-[#E6FCFF] backdrop-blur-md text-[10px]">
                        {dest.type.toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-xs text-brand-700 dark:text-brand-300 font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                      <span>{dest.state}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">{dest.name}</h3>
                    <p className="text-xs text-slate-700 dark:text-slate-200 mt-1 line-clamp-2">{dest.description}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-300/60 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-200 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>{dest.bestSeason}</span>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    className="text-xs text-white"
                    onClick={() => setSelectedDestination(dest)}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </section>
  );
};
