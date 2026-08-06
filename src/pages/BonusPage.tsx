import React, { useState } from 'react';
import { Calculator, Luggage, Layers, Sparkles, Wrench } from 'lucide-react';
import { BudgetCalculator } from '../components/bonus/BudgetCalculator';
import { PackingChecklist } from '../components/bonus/PackingChecklist';
import { DestinationComparison } from '../components/bonus/DestinationComparison';
import { AIRecommendations } from '../components/bonus/AIRecommendations';

export const BonusPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'budget' | 'packing' | 'comparison' | 'ai'>('budget');

  const tabs = [
    { id: 'budget', label: 'Budget Calculator', icon: Calculator },
    { id: 'packing', label: 'Packing Checklist', icon: Luggage },
    { id: 'comparison', label: 'Compare Places', icon: Layers },
    { id: 'ai', label: 'AI Trip Assistant', icon: Sparkles }
  ] as const;

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Page Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-500">
          <Wrench className="w-4 h-4 text-brand-500" />
          <span>Bonus Travel Toolkit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          Smart Travel Utilities
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
          Everything from Recharts budget visualizers, weather-tailored packing lists, comparison matrices, to simulated AI suggestions.
        </p>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-2xl overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-white dark:bg-darkBg-card text-brand-600 dark:text-brand-400 shadow-md scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-brand-500' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="pt-2">
        {activeTab === 'budget' && <BudgetCalculator />}
        {activeTab === 'packing' && <PackingChecklist />}
        {activeTab === 'comparison' && <DestinationComparison />}
        {activeTab === 'ai' && <AIRecommendations />}
      </div>

    </div>
  );
};
