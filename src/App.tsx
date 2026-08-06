import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { MapPage } from './pages/MapPage';
import { ItineraryPlannerPage } from './pages/ItineraryPlannerPage';
import { BonusPage } from './pages/BonusPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="itinerary" element={<ItineraryPlannerPage />} />
          <Route path="bonus" element={<BonusPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
