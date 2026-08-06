import React, { useState } from 'react';
import { mockDestinations } from '../data/destinations';
import { Destination } from '../types/destination';
import { MapPlaceholder } from '../components/map/MapPlaceholder';
import { MapLegend } from '../components/map/MapLegend';
import { MapDestinationList } from '../components/map/MapDestinationList';
import { DestinationDetailModal } from '../components/common/DestinationDetailModal';
import { Compass, Layers } from 'lucide-react';

export const MapPage: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(mockDestinations[0]);
  const [modalDestination, setModalDestination] = useState<Destination | null>(null);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-500 mb-1">
            <Compass className="w-4 h-4 text-brand-500" />
            <span>Interactive OpenStreetMap</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            Indian Destination Map
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
          Explore destinations plotted on real GPS coordinates with OpenStreetMap tiles. Click any marker or list item to fly to its location.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Map View & Floating Legend */}
        <div className="lg:col-span-2 space-y-4">
          <MapPlaceholder
            destinations={mockDestinations}
            selectedDestination={selectedDestination}
            onSelectDestination={setSelectedDestination}
            onOpenModal={setModalDestination}
          />
          <MapLegend />
        </div>

        {/* Synced Side Destination List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-500" />
              <span>Plotted Places ({mockDestinations.length})</span>
            </h3>
            <span className="text-xs text-slate-400">Click to fly on map</span>
          </div>

          <MapDestinationList
            destinations={mockDestinations}
            selectedId={selectedDestination?.id || null}
            onSelectDestination={setSelectedDestination}
            onOpenModal={setModalDestination}
          />
        </div>

      </div>

      {/* Quick Specs Modal */}
      <DestinationDetailModal
        destination={modalDestination}
        isOpen={!!modalDestination}
        onClose={() => setModalDestination(null)}
      />
    </div>
  );
};
