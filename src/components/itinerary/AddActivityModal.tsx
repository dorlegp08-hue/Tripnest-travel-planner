import React, { useState } from 'react';
import { Plus, Sparkles } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Activity } from '../../types/itinerary';
import { mockActivitiesPerDestination, defaultGenericActivities } from '../../data/activities';

interface AddActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationId: string;
  onAddActivity: (activity: Omit<Activity, 'id'>) => void;
}

export const AddActivityModal: React.FC<AddActivityModalProps> = ({
  isOpen,
  onClose,
  destinationId,
  onAddActivity
}) => {
  const [activeTab, setActiveTab] = useState<'preset' | 'custom'>('preset');

  // Custom Form Inputs
  const [name, setName] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [category, setCategory] = useState<Activity['category']>('sightseeing');
  const [cost, setCost] = useState<string>('');
  const [notes, setNotes] = useState('');
  const [locationName, setLocationName] = useState('');

  const presetActivities = mockActivitiesPerDestination[destinationId] || defaultGenericActivities;

  const handleAddPreset = (act: Activity) => {
    onAddActivity({
      name: act.name,
      time: act.time,
      category: act.category,
      cost: act.cost,
      notes: act.notes,
      locationName: act.locationName
    });
    onClose();
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddActivity({
      name: name.trim(),
      time: time || '10:00 AM',
      category,
      cost: cost ? parseFloat(cost) : 0,
      notes: notes.trim() || undefined,
      locationName: locationName.trim() || undefined
    });

    // Reset fields
    setName('');
    setCost('');
    setNotes('');
    setLocationName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Activity to Day">
      <div className="space-y-6">
        
        {/* Tab Toggle */}
        <div className="flex border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('preset')}
            className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'preset'
                ? 'border-brand-500 text-brand-600 dark:text-brand-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Pick Curated Activity
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'custom'
                ? 'border-brand-500 text-brand-600 dark:text-brand-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <Plus className="w-3.5 h-3.5" /> Add Custom Activity
          </button>
        </div>

        {/* Tab 1: Preset Suggestions */}
        {activeTab === 'preset' && (
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Curated experiences based on destination recommendations:
            </p>

            {presetActivities.map((act) => (
              <div
                key={act.id}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between gap-3 transition-colors"
              >
                <div>
                  <h5 className="font-bold text-xs text-slate-900 dark:text-white">{act.name}</h5>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                    <span>{act.time}</span>
                    <span>•</span>
                    <span className="capitalize">{act.category}</span>
                    {act.cost !== undefined && (
                      <>
                        <span>•</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{act.cost}</span>
                      </>
                    )}
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddPreset(act)}
                  className="text-xs shrink-0"
                >
                  Add
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Custom Form */}
        {activeTab === 'custom' && (
          <form onSubmit={handleCustomSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Activity Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Scuba Diving at Grand Island"
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Time
                </label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="e.g. 10:30 AM"
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Activity['category'])}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="sightseeing">Sightseeing</option>
                  <option value="food">Food & Dining</option>
                  <option value="adventure">Adventure</option>
                  <option value="relaxation">Relaxation</option>
                  <option value="culture">Culture</option>
                  <option value="transport">Transport</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Est. Cost (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder="e.g. 1500"
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Location Landmark
                </label>
                <input
                  type="text"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  placeholder="e.g. Baga Beach"
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Notes & Reminders
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Carry waterproof camera & sunscreen"
                rows={2}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full py-2.5">
              Add Activity to Itinerary
            </Button>
          </form>
        )}

      </div>
    </Modal>
  );
};
