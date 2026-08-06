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
      <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
        
        {/* Background glow overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-300 mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Curated Recommendation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold">
                Top Seasonal Highlights
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
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
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-brand-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="brand" className="bg-slate-900/80 text-white backdrop-blur-md">
                        {dest.type.toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-xs text-brand-300 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.state}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display">{dest.name}</h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">{dest.description}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-brand-400" />
                    <span>{dest.bestSeason}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white hover:text-slate-900 text-xs"
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
