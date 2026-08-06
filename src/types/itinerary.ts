export interface Activity {
  id: string;
  name: string;
  time: string;
  category: 'sightseeing' | 'food' | 'adventure' | 'relaxation' | 'culture' | 'transport';
  cost?: number;
  notes?: string;
  locationName?: string;
}

export interface ItineraryDay {
  id: string;
  dayNumber: number;
  date: string;
  activities: Activity[];
}

export interface Trip {
  id: string;
  name: string;
  destinationId: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
  createdAt: string;
}
