import { Activity } from '../types/itinerary';

export const mockActivitiesPerDestination: Record<string, Activity[]> = {
  goa: [
    { id: 'goa-1', name: 'Scuba Diving & Snorkeling at Grand Island', time: '08:30 AM', category: 'adventure', cost: 2500, notes: 'Includes gear and boat transfers', locationName: 'Grand Island' },
    { id: 'goa-2', name: 'Sunset Cruise on Mandovi River', time: '05:30 PM', category: 'relaxation', cost: 800, notes: 'Includes live Konkani folk music', locationName: 'Panjim Jetty' },
    { id: 'goa-3', name: 'Explore Heritage Latin Quarter (Fontainhas)', time: '11:00 AM', category: 'culture', cost: 0, notes: 'Guided walking tour among colorful Portuguese houses', locationName: 'Fontainhas, Panjim' },
    { id: 'goa-4', name: 'Beachside Seafood Lunch at Baga', time: '01:30 PM', category: 'food', cost: 1200, notes: 'Try famous Goa Fish Curry Rice & Prawn Balchão', locationName: 'Baga Beach' },
    { id: 'goa-5', name: 'Water Sports at Calangute Beach', time: '03:00 PM', category: 'adventure', cost: 1800, notes: 'Parasailing, Jet Ski & Banana Ride combo', locationName: 'Calangute Beach' }
  ],
  manali: [
    { id: 'man-1', name: 'Snow Activities at Solang Valley', time: '09:00 AM', category: 'adventure', cost: 2000, notes: 'Skiing, Quad Biking & Zorbing', locationName: 'Solang Valley' },
    { id: 'man-2', name: 'Visit Hadimba Temple', time: '02:00 PM', category: 'sightseeing', cost: 100, notes: 'Ancient wooden temple in cedar forest', locationName: 'Dhungri Van Vihar' },
    { id: 'man-3', name: 'Stroll & Cafe Hopping in Old Manali', time: '05:00 PM', category: 'food', cost: 900, notes: 'Try trout fish and mountain herbal tea', locationName: 'Old Manali Village' },
    { id: 'man-4', name: 'Excursion through Atal Tunnel to Sissu', time: '08:00 AM', category: 'sightseeing', cost: 1500, notes: 'Scenic drive to Lahaul valley waterfall', locationName: 'Sissu, Lahaul' }
  ],
  jaipur: [
    { id: 'jai-1', name: 'Amer Fort Elephant & Jeep Tour', time: '08:30 AM', category: 'sightseeing', cost: 600, notes: 'Audio guide available at Sheesh Mahal', locationName: 'Amer Fort' },
    { id: 'jai-2', name: 'Photo Stop at Hawa Mahal & City Palace', time: '11:30 AM', category: 'culture', cost: 700, notes: 'Visit the royal museum and courtyards', locationName: 'Johari Bazar' },
    { id: 'jai-3', name: 'Traditional Rajasthani Thali at Chokhi Dhani', time: '07:30 PM', category: 'food', cost: 1100, notes: 'Includes puppet show & folk dance', locationName: 'Tonk Road' },
    { id: 'jai-4', name: 'Sunset View from Nahargarh Fort', time: '05:30 PM', category: 'sightseeing', cost: 300, notes: 'Panoramic view of Jaipur city lights', locationName: 'Nahargarh Fort' }
  ],
  leh: [
    { id: 'leh-1', name: 'Pangong Tso Lake Day Excursion', time: '06:00 AM', category: 'sightseeing', cost: 3500, notes: 'Pass through Chang La pass', locationName: 'Pangong Lake' },
    { id: 'leh-2', name: 'Visit Thiksey Monastery & Hemis', time: '10:00 AM', category: 'culture', cost: 200, notes: 'Morning prayer ceremony with monks', locationName: 'Thiksey' },
    { id: 'leh-3', name: 'Magnetic Hill & Sangam Confluence', time: '02:00 PM', category: 'adventure', cost: 1200, notes: 'Indus and Zanskar river confluence', locationName: 'Nimu' }
  ],
  rishikesh: [
    { id: 'rsh-1', name: 'White Water River Rafting (16km)', time: '09:00 AM', category: 'adventure', cost: 1200, notes: 'Shivpuri to Laxman Jhula rapids', locationName: 'Shivpuri' },
    { id: 'rsh-2', name: 'Evening Ganga Aarti at Triveni Ghat', time: '06:00 PM', category: 'culture', cost: 0, notes: 'Arrive 30 mins early for good seating', locationName: 'Triveni Ghat' },
    { id: 'rsh-3', name: 'Yoga & Meditation Session at Beatles Ashram', time: '07:30 AM', category: 'relaxation', cost: 400, notes: 'Includes entry ticket', locationName: 'Swarg Ashram' }
  ]
};

export const defaultGenericActivities: Activity[] = [
  { id: 'gen-1', name: 'Local City Guided Sightseeing', time: '09:30 AM', category: 'sightseeing', cost: 800, notes: 'Visit top rated local attractions' },
  { id: 'gen-2', name: 'Authentic Regional Culinary Tasting', time: '01:00 PM', category: 'food', cost: 650, notes: 'Sample popular local food joints' },
  { id: 'gen-3', name: 'Sunset Viewpoint & Photography', time: '05:45 PM', category: 'relaxation', cost: 0, notes: 'Capture scenic golden hour photos' },
  { id: 'gen-4', name: 'Souvenir Shopping at Main Market', time: '07:30 PM', category: 'culture', cost: 500, notes: 'Local handicrafts & specialty items' }
];
