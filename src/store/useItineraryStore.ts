import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Trip, Activity, ItineraryDay } from '../types/itinerary';
import { mockActivitiesPerDestination, defaultGenericActivities } from '../data/activities';

interface ItineraryState {
  trips: Trip[];
  activeTripId: string | null;
  
  createTrip: (name: string, destinationId: string, startDate: string, endDate: string) => Trip;
  setActiveTrip: (tripId: string) => void;
  deleteTrip: (tripId: string) => void;
  
  addActivityToDay: (tripId: string, dayId: string, activity: Omit<Activity, 'id'>) => void;
  removeActivityFromDay: (tripId: string, dayId: string, activityId: string) => void;
  moveActivity: (tripId: string, dayId: string, activityId: string, direction: 'up' | 'down') => void;
  
  getActiveTrip: () => Trip | undefined;
}

const generateDaysBetweenDates = (startDateStr: string, endDateStr: string, destinationId: string): ItineraryDay[] => {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const days: ItineraryDay[] = [];
  
  let current = new Date(start);
  let dayNum = 1;
  
  const destActivities = mockActivitiesPerDestination[destinationId] || defaultGenericActivities;
  
  while (current <= end) {
    const dateFormatted = current.toISOString().split('T')[0];
    
    // Pick 1-2 default activities for demo richness
    const initialActivities: Activity[] = [];
    const sampleIndex = (dayNum - 1) % destActivities.length;
    if (destActivities[sampleIndex]) {
      initialActivities.push({
        ...destActivities[sampleIndex],
        id: `act-init-${dayNum}-${Date.now()}`
      });
    }

    days.push({
      id: `day-${dayNum}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      dayNumber: dayNum,
      date: dateFormatted,
      activities: initialActivities
    });

    current.setDate(current.getDate() + 1);
    dayNum++;
  }

  // Safety fallback if start date is after end date
  if (days.length === 0) {
    days.push({
      id: `day-1-${Date.now()}`,
      dayNumber: 1,
      date: startDateStr,
      activities: destActivities.slice(0, 2).map((a, idx) => ({ ...a, id: `act-${idx}-${Date.now()}` }))
    });
  }

  return days;
};

const defaultInitialTrip: Trip = {
  id: 'trip-demo-goa',
  name: 'Sun & Beach Escapade',
  destinationId: 'goa',
  startDate: '2026-11-10',
  endDate: '2026-11-13',
  createdAt: new Date().toISOString(),
  days: generateDaysBetweenDates('2026-11-10', '2026-11-13', 'goa')
};

export const useItineraryStore = create<ItineraryState>()(
  persist(
    (set, get) => ({
      trips: [defaultInitialTrip],
      activeTripId: 'trip-demo-goa',

      createTrip: (name, destinationId, startDate, endDate) => {
        const days = generateDaysBetweenDates(startDate, endDate, destinationId);
        const newTrip: Trip = {
          id: `trip-${Date.now()}`,
          name: name || 'My Next Adventure',
          destinationId,
          startDate,
          endDate,
          days,
          createdAt: new Date().toISOString()
        };

        set((state) => ({
          trips: [newTrip, ...state.trips],
          activeTripId: newTrip.id
        }));

        return newTrip;
      },

      setActiveTrip: (tripId) => set({ activeTripId: tripId }),

      deleteTrip: (tripId) =>
        set((state) => {
          const filtered = state.trips.filter((t) => t.id !== tripId);
          return {
            trips: filtered,
            activeTripId: state.activeTripId === tripId ? (filtered[0]?.id || null) : state.activeTripId
          };
        }),

      addActivityToDay: (tripId, dayId, activityData) => {
        const newActivity: Activity = {
          ...activityData,
          id: `act-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`
        };

        set((state) => ({
          trips: state.trips.map((trip) => {
            if (trip.id !== tripId) return trip;
            return {
              ...trip,
              days: trip.days.map((day) => {
                if (day.id !== dayId) return day;
                return {
                  ...day,
                  activities: [...day.activities, newActivity]
                };
              })
            };
          })
        }));
      },

      removeActivityFromDay: (tripId, dayId, activityId) => {
        set((state) => ({
          trips: state.trips.map((trip) => {
            if (trip.id !== tripId) return trip;
            return {
              ...trip,
              days: trip.days.map((day) => {
                if (day.id !== dayId) return day;
                return {
                  ...day,
                  activities: day.activities.filter((a) => a.id !== activityId)
                };
              })
            };
          })
        }));
      },

      moveActivity: (tripId, dayId, activityId, direction) => {
        set((state) => ({
          trips: state.trips.map((trip) => {
            if (trip.id !== tripId) return trip;
            return {
              ...trip,
              days: trip.days.map((day) => {
                if (day.id !== dayId) return day;
                const index = day.activities.findIndex((a) => a.id === activityId);
                if (index === -1) return day;

                const targetIndex = direction === 'up' ? index - 1 : index + 1;
                if (targetIndex < 0 || targetIndex >= day.activities.length) return day;

                const updated = [...day.activities];
                const [moved] = updated.splice(index, 1);
                updated.splice(targetIndex, 0, moved);

                return {
                  ...day,
                  activities: updated
                };
              })
            };
          })
        }));
      },

      getActiveTrip: () => {
        const state = get();
        return state.trips.find((t) => t.id === state.activeTripId) || state.trips[0];
      }
    }),
    {
      name: 'tripnest-itinerary-storage'
    }
  )
);
