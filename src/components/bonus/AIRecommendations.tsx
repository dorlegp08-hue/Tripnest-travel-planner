import React, { useState } from 'react';
import { Sparkles, Compass, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockDestinations } from '../../data/destinations';
import { Destination, DestinationType, BudgetLevel } from '../../types/destination';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { DestinationDetailModal } from '../common/DestinationDetailModal';

export const AIRecommendations: React.FC = () => {
  const [selectedType, setSelectedType] = useState<DestinationType | 'all'>('all');
  const [selectedBudget, setSelectedBudget] = useState<BudgetLevel | 'all'>('all');
  const [isThinking, setIsThinking] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const [recommendations, setRecommendations] = useState<
    { destination: Destination; rationale: string }[]
  >([]);

  const handleGenerateAI = () => {
    setIsThinking(true);
    setHasGenerated(false);

    setTimeout(() => {
      let matches = mockDestinations.filter((d) => {
        if (selectedType !== 'all' && d.type !== selectedType) return false;
        if (selectedBudget !== 'all' && d.budgetLevel !== selectedBudget) return false;
        return true;
      });

      if (matches.length === 0) {
        matches = mockDestinations.slice(0, 3);
      } else {
        matches = matches.slice(0, 3);
      }

      const rationales = [
        'Optimal weather alignment for this time of year with high traveler satisfaction ratings.',
        'Fits your targeted budget tier while offering top-rated regional activities and scenery.',
        'Curated by TripNest AI engine for balanced crowd density and memorable cultural heritage.'
      ];

      setRecommendations(
        matches.map((dest, idx) => ({
          destination: dest,
          rationale: rationales[idx % rationales.length]
        }))
      );

      setIsThinking(false);
      setHasGenerated(true);
    }, 1200);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-coral/10 text-accent-coral flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                TripNest AI Travel Recommender
              </h2>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-gradient-to-r from-brand-500 to-accent-coral text-white shadow-sm">
                AI Beta
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select your travel vibes to generate custom AI-curated destination rationale.
            </p>
          </div>
        </div>
      </div>

      {/* Input Selector Card */}
      <Card className="space-y-6">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white font-display">
          Configure Your Preference Profile
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Vibe / Type Selector */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700 dark:text-slate-300 block">
              Desired Travel Vibe / Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['all', 'mountains', 'beaches', 'heritage', 'city', 'adventure'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`py-2 px-3 rounded-xl border font-semibold capitalize transition-all ${
                    selectedType === t
                      ? 'bg-brand-500 text-white border-brand-500 shadow'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Level Selector */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700 dark:text-slate-300 block">
              Target Daily Budget Tier
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['all', 'low', 'medium', 'high'] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBudget(b)}
                  className={`py-2 px-3 rounded-xl border font-semibold capitalize transition-all ${
                    selectedBudget === b
                      ? 'bg-brand-500 text-white border-brand-500 shadow'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          icon={<Sparkles className="w-5 h-5 text-amber-300" />}
          onClick={handleGenerateAI}
          disabled={isThinking}
          className="w-full py-3 font-bold"
        >
          {isThinking ? 'TripNest AI is Analyzing Preferences...' : 'Generate AI Recommendations'}
        </Button>
      </Card>

      {/* Shimmer / Thinking State */}
      {isThinking && (
        <div className="p-8 text-center bg-white dark:bg-darkBg-card rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center mx-auto animate-spin">
            <Compass className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-base text-slate-800 dark:text-slate-200 font-display">
            Analyzing Climate Patterns & Budget Matrices...
          </h4>
          <p className="text-xs text-slate-400">
            Powered by TripNest AI heuristics and real Indian weather mock dataset.
          </p>
        </div>
      )}

      {/* Generated Results Grid */}
      <AnimatePresence>
        {hasGenerated && !isThinking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg font-display text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>AI Recommended Picks ({recommendations.length})</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.map(({ destination: dest, rationale }) => (
                <Card
                  key={dest.id}
                  hoverEffect
                  onClick={() => setSelectedDestination(dest)}
                  className="space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="relative h-44 rounded-xl overflow-hidden">
                      <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2">
                        <Badge variant="brand" size="sm" className="bg-slate-900/80 text-white">
                          AI Matched
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2 bg-white/90 dark:bg-slate-900/90 px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span>{dest.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg font-display text-slate-900 dark:text-white">
                        {dest.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {dest.state}, {dest.country}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-900/30 border border-brand-200/50 dark:border-brand-800 text-xs text-brand-900 dark:text-brand-200">
                      <span className="font-bold block mb-0.5 text-brand-600 dark:text-brand-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> AI Rationale
                      </span>
                      {rationale}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      ₹{dest.pricePerDay} / day
                    </span>
                    <span className="font-bold text-brand-500 flex items-center gap-1">
                      Quick View <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />

    </div>
  );
};
