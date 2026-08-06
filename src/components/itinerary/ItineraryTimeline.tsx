import React from 'react';
import { Trip, Activity } from '../../types/itinerary';
import { DayCard } from './DayCard';

interface ItineraryTimelineProps {
  trip: Trip;
  onAddActivity: (tripId: string, dayId: string, activity: Omit<Activity, 'id'>) => void;
  onRemoveActivity: (tripId: string, dayId: string, activityId: string) => void;
  onMoveActivity: (tripId: string, dayId: string, activityId: string, direction: 'up' | 'down') => void;
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({
  trip,
  onAddActivity,
  onRemoveActivity,
  onMoveActivity
}) => {
  return (
    <div className="relative space-y-6 before:absolute before:inset-0 before:left-5 sm:before:left-6 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:z-0">
      {trip.days.map((day) => (
        <div key={day.id} className="relative z-10">
          <DayCard
            day={day}
            tripId={trip.id}
            destinationId={trip.destinationId}
            onAddActivity={onAddActivity}
            onRemoveActivity={onRemoveActivity}
            onMoveActivity={onMoveActivity}
          />
        </div>
      ))}
    </div>
  );
};
