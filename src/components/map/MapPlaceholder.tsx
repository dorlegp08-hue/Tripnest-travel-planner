import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Destination } from '../../types/destination';
import { Badge } from '../common/Badge';
import { Star, MapPin, ExternalLink } from 'lucide-react';

interface MapPlaceholderProps {
  destinations: Destination[];
  selectedDestination: Destination | null;
  onSelectDestination: (dest: Destination) => void;
  onOpenModal: (dest: Destination) => void;
}

// Controller component to handle map pan/flyTo on selection
const MapController: React.FC<{ selected: Destination | null }> = ({ selected }) => {
  const map = useMap();

  useEffect(() => {
    if (selected) {
      map.flyTo([selected.coordinates.lat, selected.coordinates.lng], 8, {
        duration: 1.5
      });
    }
  }, [selected, map]);

  return null;
};

// Create custom colored Leaflet DivIcons based on crowd density
const createCustomPinIcon = (crowdLevel: 'low' | 'medium' | 'high', isSelected: boolean) => {
  const colorMap = {
    low: '#10b981',    // Emerald Green
    medium: '#f59e0b', // Amber Yellow
    high: '#f43f5e'    // Rose Red
  };

  const color = colorMap[crowdLevel];
  const size = isSelected ? 38 : 30;

  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="${size - 14}" height="${size - 14}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
};

export const MapPlaceholder: React.FC<MapPlaceholderProps> = ({
  destinations,
  selectedDestination,
  onSelectDestination,
  onOpenModal
}) => {
  const indiaCenter = { lat: 20.5937, lng: 78.9629 };

  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10">
      <MapContainer
        center={[indiaCenter.lat, indiaCenter.lng]}
        zoom={5}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController selected={selectedDestination} />

        {destinations.map((dest) => {
          const isSelected = selectedDestination?.id === dest.id;
          return (
            <Marker
              key={dest.id}
              position={[dest.coordinates.lat, dest.coordinates.lng]}
              icon={createCustomPinIcon(dest.crowdLevel, isSelected)}
              eventHandlers={{
                click: () => onSelectDestination(dest)
              }}
            >
              <Popup className="custom-leaflet-popup">
                <div className="p-1 space-y-2 max-w-xs">
                  <div className="relative h-24 rounded-lg overflow-hidden">
                    <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover" />
                    <div className="absolute top-1.5 left-1.5">
                      <Badge variant={dest.crowdLevel} size="sm">
                        {dest.crowdLevel} crowd
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white font-display flex items-center justify-between">
                      <span>{dest.name}</span>
                      <span className="text-amber-500 flex items-center text-xs">
                        <Star className="w-3 h-3 fill-amber-400 mr-0.5" /> {dest.rating}
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-brand-500" /> {dest.state}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400">
                      ₹{dest.pricePerDay} / day
                    </span>

                    <button
                      onClick={() => onOpenModal(dest)}
                      className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-brand-500 text-white flex items-center gap-1 hover:bg-brand-600 transition-colors"
                    >
                      View Specs <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
