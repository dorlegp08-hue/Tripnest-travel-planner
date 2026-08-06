import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrendingDestinations } from '../components/home/TrendingDestinations';
import { SeasonalPicks } from '../components/home/SeasonalPicks';
import { FeatureHighlights } from '../components/home/FeatureHighlights';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <HeroSection />
      <TrendingDestinations />
      <SeasonalPicks />
      <FeatureHighlights />
    </div>
  );
};
