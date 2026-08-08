import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Map, CalendarCheck, Sparkles, Calculator, Layers } from 'lucide-react';
import { Card } from '../common/Card';

export const FeatureHighlights: React.FC = () => {
  const features = [
    {
      icon: Sun,
      title: 'Weather-Aware Planning',
      description: 'Integrates live OpenWeatherMap API data to surface optimal destinations and seasonal packing items.',
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      icon: Map,
      title: 'Interactive OpenStreetMap',
      description: 'Full Leaflet map plotted with real Indian GPS coordinates, live weather badges, and crowd density popups.',
      color: 'text-brand-500 bg-brand-500/10'
    },
    {
      icon: CalendarCheck,
      title: 'Day-by-Day Itinerary Builder',
      description: 'Auto-generate structured timelines based on trip dates, select curated activities, and reorder on the fly.',
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      icon: Calculator,
      title: 'Dynamic Budget Calculator',
      description: 'Break down estimated travel, accommodation, food, and activity expenses with interactive Recharts graphics.',
      color: 'text-purple-500 bg-purple-500/10'
    },
    {
      icon: Layers,
      title: 'Destination Comparison',
      description: 'Compare weather, budget tiers, ratings, and best seasons side-by-side for up to 3 destinations.',
      color: 'text-blue-500 bg-blue-500/10'
    },
    {
      icon: Sparkles,
      title: 'Smart AI Recommendations',
      description: 'Simulated AI engine that scans your travel preferences to generate personalized trip suggestions.',
      color: 'text-accent-coral bg-accent-coral/10'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          Everything You Need to Plan Your Perfect Escape
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card className="h-full space-y-4 hover:border-brand-500/40 p-6">
                <div className={`w-12 h-12 rounded-2xl ${feat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
