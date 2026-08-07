import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Calendar, Sun, CloudRain, Snowflake, Thermometer, Users, Plus, Check, ArrowRight, DollarSign } from 'lucide-react';
import { Destination } from '../../types/destination';
import { Modal } from './Modal';
import { Badge } from './Badge';
import { Button } from './Button';
import { fetchDestinationWeather, WeatherData } from '../../data/weather';
import { mockActivitiesPerDestination } from '../../data/activities';
import { useComparisonStore } from '../../store/useComparisonStore';
import { useItineraryStore } from '../../store/useItineraryStore';

interface DestinationDetailModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  isOpen,
  onClose
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedToComparison, setAddedToComparison] = useState(false);
  const navigate = useNavigate();

  const { addDestination, isInComparison } = useComparisonStore();
  const { createTrip } = useItineraryStore();

  useEffect(() => {
    if (destination) {
      setActiveImageIndex(0);
      setAddedToComparison(isInComparison(destination.id));
      fetchDestinationWeather(
        destination.coordinates.lat,
        destination.coordinates.lng,
        destination.weather
      ).then(setWeatherData);
    }
  }, [destination, isInComparison]);

  if (!destination) return null;

  const weatherIcons = {
    sunny: Sun,
    rainy: CloudRain,
    snowy: Snowflake,
    mild: Thermometer
  };
  const WeatherIcon = weatherIcons[destination.weather];

  const activities = mockActivitiesPerDestination[destination.id] || [];

  const handleAddToComparison = () => {
    const success = addDestination(destination.id);
    if (success) {
      setAddedToComparison(true);
    } else {
      alert('You can compare a maximum of 3 destinations at once.');
    }
  };

  const handleCreateItinerary = () => {
    // Generate dates: 7 days from now for 3 days
    const start = new Date();
    start.setDate(start.getDate() + 7);
    const end = new Date(start);
    end.setDate(end.getDate() + 3);

    const startStr = start.toISOString().split('T')[0];
    const endStr = end.toISOString().split('T')[0];

    createTrip(`${destination.name} Trip`, destination.id, startStr, endStr);
    onClose();
    navigate('/itinerary');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
      <div className="space-y-6">
        
        {/* Gallery / Image Header */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
          <img
            src={destination.galleryImages[activeImageIndex] || destination.imageUrl}
            alt={destination.name}
            onError={(e) => {
              e.currentTarget.src = destination.imageUrl || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Badge variant="brand" className="bg-white/90 text-slate-900 dark:bg-slate-900/90 dark:text-white backdrop-blur-md">
              {destination.type.toUpperCase()}
            </Badge>
            <Badge variant={destination.weather} icon={<WeatherIcon className="w-3.5 h-3.5" />}>
              {destination.weather}
            </Badge>
            <Badge variant={destination.crowdLevel} icon={<Users className="w-3.5 h-3.5" />}>
              Crowd: {destination.crowdLevel}
            </Badge>
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <div className="flex items-center gap-2 text-brand-300 text-sm font-medium mb-1">
                <MapPin className="w-4 h-4" />
                <span>{destination.state}, {destination.country}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold">{destination.name}</h2>
            </div>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <div>
                <span className="text-lg font-bold">{destination.rating.toFixed(1)}</span>
                <span className="text-xs text-slate-300 block">Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        {destination.galleryImages.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-1">
            {destination.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIndex === idx ? 'border-brand-500 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt="thumb"
                  onError={(e) => {
                    e.currentTarget.src = destination.imageUrl || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Info */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">About Destination</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {destination.description}
            </p>

            {/* Activities Preview */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Popular Activities</h4>
              <div className="space-y-2">
                {activities.slice(0, 3).map((act) => (
                  <div key={act.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-xs">
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{act.name}</span>
                      <span className="block text-slate-400 mt-0.5">{act.locationName || act.category}</span>
                    </div>
                    {act.cost !== undefined && (
                      <span className="font-bold text-brand-600 dark:text-brand-400 shrink-0">₹{act.cost}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Stats & Actions */}
          <div className="space-y-4 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Quick Stats</h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-500" /> Best Season
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{destination.bestSeason}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-500" /> Est. Daily Cost
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{destination.pricePerDay} / day</span>
              </div>

              {weatherData && (
                <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <WeatherIcon className="w-4 h-4 text-amber-500" /> Live Weather
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{weatherData.temp}°C, {weatherData.condition}</span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <Button
                variant="primary"
                className="w-full py-3"
                icon={<Plus className="w-4 h-4" />}
                onClick={handleCreateItinerary}
              >
                Add to Itinerary
              </Button>

              <Button
                variant={addedToComparison ? 'ghost' : 'outline'}
                className="w-full"
                icon={addedToComparison ? <Check className="w-4 h-4 text-emerald-500" /> : <ArrowRight className="w-4 h-4" />}
                onClick={handleAddToComparison}
              >
                {addedToComparison ? 'Added to Compare' : 'Add to Compare'}
              </Button>
            </div>
          </div>

        </div>

      </div>
    </Modal>
  );
};
