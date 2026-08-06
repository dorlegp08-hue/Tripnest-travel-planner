import React, { useState } from 'react';
import { Plus, Calendar, CheckCircle2 } from 'lucide-react';
import { ItineraryDay, Activity } from '../../types/itinerary';
import { ActivityCard } from './ActivityCard';
import { AddActivityModal } from './AddActivityModal';
import { Button } from '../common/Button';

interface DayCardProps {
  day: ItineraryDay;
  tripId: string;
  destinationId: string;
  onAddActivity: (tripId: string, dayId: string, activity: Omit<Activity, 'id'>) => void;
  onRemoveActivity: (tripId: string, dayId: string, activityId: string) => void;
  onMoveActivity: (tripId: string, dayId: string, activityId: string, direction: 'up' | 'down') => void;
}

export const DayCard: React.FC<DayCardProps> = ({
  day,
  tripId,
  destinationId,
  onAddActivity,
  onRemoveActivity,
  onMoveActivity
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const dayTotalCost = day.activities.reduce((sum, act) => sum + (act.cost || 0), 0);

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 space-y-4 shadow-sm">
      
      {/* Day Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-500 text-white font-display font-extrabold flex items-center justify-center text-base shadow-md shadow-brand-500/20">
            D{day.dayNumber}
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <span>Day {day.dayNumber}</span>
              <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {day.date}
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {day.activities.length} {day.activities.length === 1 ? 'activity' : 'activities'} scheduled
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {dayTotalCost > 0 && (
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Day Total</span>
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">₹{dayTotalCost}</span>
            </div>
          )}

          <Button
            size="sm"
            variant="outline"
            icon={<Plus className="w-3.5 h-3.5" />}
            onClick={() => setIsAddModalOpen(true)}
            className="text-xs"
          >
            Add Activity
          </Button>
        </div>
      </div>

      {/* Activity Items List */}
      <div className="space-y-3">
        {day.activities.length === 0 ? (
          <div className="py-8 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 text-xs space-y-2">
            <CheckCircle2 className="w-6 h-6 mx-auto text-slate-300 dark:text-slate-600" />
            <p>No activities added for Day {day.dayNumber} yet.</p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="text-brand-500 font-bold hover:underline"
            >
              + Click to add your first activity
            </button>
          </div>
        ) : (
          day.activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              isFirst={index === 0}
              isLast={index === day.activities.length - 1}
              onMoveUp={() => onMoveActivity(tripId, day.id, activity.id, 'up')}
              onMoveDown={() => onMoveActivity(tripId, day.id, activity.id, 'down')}
              onDelete={() => onRemoveActivity(tripId, day.id, activity.id)}
            />
          ))
        )}
      </div>

      {/* Add Activity Modal */}
      <AddActivityModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        destinationId={destinationId}
        onAddActivity={(activity) => onAddActivity(tripId, day.id, activity)}
      />

    </div>
  );
};
