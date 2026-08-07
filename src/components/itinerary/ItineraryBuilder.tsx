import React, { useState } from 'react';
import { Plus, Trash2, Calendar, MapPin, DollarSign, ListOrdered } from 'lucide-react';
import { useItineraryStore } from '../../store/useItineraryStore';
import { mockDestinations } from '../../data/destinations';
import { ItineraryTimeline } from './ItineraryTimeline';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';

export const ItineraryBuilder: React.FC = () => {
  const {
    trips,
    activeTripId,
    setActiveTrip,
    createTrip,
    deleteTrip,
    addActivityToDay,
    removeActivityFromDay,
    moveActivity,
    getActiveTrip
  } = useItineraryStore();

  const [isNewTripModalOpen, setIsNewTripModalOpen] = useState(false);

  // New Trip Form State
  const [tripName, setTripName] = useState('');
  const [destinationId, setDestinationId] = useState(mockDestinations[0].id);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });

  const activeTrip = getActiveTrip();
  const activeDestination = mockDestinations.find((d) => d.id === activeTrip?.destinationId) || mockDestinations[0];

  const handleCreateTripSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tripName.trim()) return;

    createTrip(tripName.trim(), destinationId, startDate, endDate);
    setTripName('');
    setIsNewTripModalOpen(false);
  };

  // Calculations for summary header
  const totalDays = activeTrip?.days.length || 0;
  const totalActivities = activeTrip?.days.reduce((acc, d) => acc + d.activities.length, 0) || 0;
  const totalActivitiesCost = activeTrip?.days.reduce(
    (acc, d) => acc + d.activities.reduce((s, a) => s + (a.cost || 0), 0),
    0
  ) || 0;
  const estStayCost = (activeDestination?.pricePerDay || 3000) * totalDays;
  const totalEstimatedTripCost = totalActivitiesCost + estStayCost;

  return (
    <div className="space-y-8">
      
      {/* Top Trips Switcher Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">Your Trips:</span>
          {trips.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTrip(t.id)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTripId === t.id
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <Button
          variant="primary"
          size="sm"
          icon={<Plus className="w-4 h-4" />}
          onClick={() => setIsNewTripModalOpen(true)}
          className="shrink-0"
        >
          New Trip
        </Button>
      </div>

      {activeTrip && (
        <div className="space-y-6">
          
          {/* Active Trip Header Banner */}
          <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 text-white shadow-2xl">
            <img
              src={activeDestination.imageUrl}
              alt={activeDestination.name}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';
              }}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-300 text-xs font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>{activeDestination.name}, {activeDestination.state}</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-display font-extrabold">{activeTrip.name}</h1>
                <p className="text-xs sm:text-sm text-slate-200 flex items-center gap-2 pt-1">
                  <Calendar className="w-4 h-4 text-brand-400" />
                  <span>{activeTrip.startDate} to {activeTrip.endDate}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {trips.length > 1 && (
                  <Button
                    variant="danger"
                    size="sm"
                    icon={<Trash2 className="w-4 h-4" />}
                    onClick={() => deleteTrip(activeTrip.id)}
                  >
                    Delete Trip
                  </Button>
                )}
              </div>
            </div>

            {/* Quick Stats Pill Row */}
            <div className="relative z-10 grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/20 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-300 block flex items-center justify-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-300" /> Duration
                </span>
                <span className="text-xl sm:text-2xl font-extrabold">{totalDays} Days</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-300 block flex items-center justify-center gap-1">
                  <ListOrdered className="w-3.5 h-3.5 text-amber-300" /> Activities
                </span>
                <span className="text-xl sm:text-2xl font-extrabold">{totalActivities} Items</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-300 block flex items-center justify-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-300" /> Est. Cost
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-400">₹{totalEstimatedTripCost}</span>
              </div>
            </div>
          </div>

          {/* Timeline Days List */}
          <ItineraryTimeline
            trip={activeTrip}
            onAddActivity={addActivityToDay}
            onRemoveActivity={removeActivityFromDay}
            onMoveActivity={moveActivity}
          />
        </div>
      )}

      {/* New Trip Creation Modal */}
      <Modal
        isOpen={isNewTripModalOpen}
        onClose={() => setIsNewTripModalOpen(false)}
        title="Create New Trip Itinerary"
      >
        <form onSubmit={handleCreateTripSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Trip Name *
            </label>
            <input
              type="text"
              required
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              placeholder="e.g. Goa Monsoon Retreat"
              className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Target Destination *
            </label>
            <select
              value={destinationId}
              onChange={(e) => setDestinationId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {mockDestinations.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.state}) — ₹{d.pricePerDay}/day
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Start Date
              </label>
              <input
                type="date"
                required
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                End Date
              </label>
              <input
                type="date"
                required
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" className="w-full py-2.5 mt-2">
            Generate Itinerary Timeline
          </Button>
        </form>
      </Modal>

    </div>
  );
};
