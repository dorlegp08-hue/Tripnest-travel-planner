import { Activity } from '../types/itinerary';

export const mockActivitiesPerDestination: Record<string, Activity[]> = {
  goa: [
    { id: 'goa-1', name: 'Scuba Diving & Snorkeling at Grand Island', time: '08:30 AM', category: 'adventure', cost: 2500, notes: 'Includes gear and boat transfers', locationName: 'Grand Island' },
    { id: 'goa-2', name: 'Explore Heritage Latin Quarter (Fontainhas)', time: '11:00 AM', category: 'culture', cost: 0, notes: 'Guided walking tour among colorful Portuguese houses', locationName: 'Fontainhas, Panjim' },
    { id: 'goa-3', name: 'Beachside Seafood Lunch at Baga', time: '01:30 PM', category: 'food', cost: 1200, notes: 'Try famous Goa Fish Curry Rice & Prawn Balchão', locationName: 'Baga Beach' },
    { id: 'goa-4', name: 'Water Sports at Calangute Beach', time: '03:00 PM', category: 'adventure', cost: 1800, notes: 'Parasailing, Jet Ski & Banana Ride combo', locationName: 'Calangute Beach' },
    { id: 'goa-5', name: 'Sunset Cruise on Mandovi River', time: '05:30 PM', category: 'relaxation', cost: 800, notes: 'Includes live Konkani folk music', locationName: 'Panjim Jetty' }
  ],
  manali: [
    { id: 'man-1', name: 'Excursion through Atal Tunnel to Sissu', time: '08:00 AM', category: 'sightseeing', cost: 1500, notes: 'Scenic drive to Lahaul valley waterfall', locationName: 'Sissu, Lahaul' },
    { id: 'man-2', name: 'Snow Activities at Solang Valley', time: '10:00 AM', category: 'adventure', cost: 2000, notes: 'Skiing, Quad Biking & Zorbing', locationName: 'Solang Valley' },
    { id: 'man-3', name: 'Visit Hadimba Temple', time: '02:30 PM', category: 'sightseeing', cost: 100, notes: 'Ancient wooden temple in cedar forest', locationName: 'Dhungri Van Vihar' },
    { id: 'man-4', name: 'Stroll & Cafe Hopping in Old Manali', time: '05:30 PM', category: 'food', cost: 900, notes: 'Try trout fish and mountain herbal tea', locationName: 'Old Manali Village' }
  ],
  jaipur: [
    { id: 'jai-1', name: 'Amer Fort Elephant & Jeep Tour', time: '08:30 AM', category: 'sightseeing', cost: 600, notes: 'Audio guide available at Sheesh Mahal', locationName: 'Amer Fort' },
    { id: 'jai-2', name: 'Photo Stop at Hawa Mahal & City Palace', time: '11:30 AM', category: 'culture', cost: 700, notes: 'Visit the royal museum and courtyards', locationName: 'Johari Bazar' },
    { id: 'jai-3', name: 'Sunset View from Nahargarh Fort', time: '05:30 PM', category: 'sightseeing', cost: 300, notes: 'Panoramic view of Jaipur city lights', locationName: 'Nahargarh Fort' },
    { id: 'jai-4', name: 'Traditional Rajasthani Thali at Chokhi Dhani', time: '07:30 PM', category: 'food', cost: 1100, notes: 'Includes puppet show & folk dance', locationName: 'Tonk Road' }
  ],
  leh: [
    { id: 'leh-1', name: 'Pangong Tso Lake Day Excursion', time: '06:00 AM', category: 'sightseeing', cost: 3500, notes: 'Pass through Chang La pass', locationName: 'Pangong Lake' },
    { id: 'leh-2', name: 'Visit Thiksey Monastery & Hemis', time: '10:30 AM', category: 'culture', cost: 200, notes: 'Morning prayer ceremony with monks', locationName: 'Thiksey' },
    { id: 'leh-3', name: 'Magnetic Hill & Sangam Confluence', time: '02:30 PM', category: 'adventure', cost: 1200, notes: 'Indus and Zanskar river confluence', locationName: 'Nimu' }
  ],
  rishikesh: [
    { id: 'rsh-1', name: 'Yoga & Meditation Session at Beatles Ashram', time: '07:30 AM', category: 'relaxation', cost: 400, notes: 'Includes entry ticket', locationName: 'Swarg Ashram' },
    { id: 'rsh-2', name: 'White Water River Rafting (16km)', time: '09:30 AM', category: 'adventure', cost: 1200, notes: 'Shivpuri to Laxman Jhula rapids', locationName: 'Shivpuri' },
    { id: 'rsh-3', name: 'Evening Ganga Aarti at Triveni Ghat', time: '06:00 PM', category: 'culture', cost: 0, notes: 'Arrive 30 mins early for good seating', locationName: 'Triveni Ghat' }
  ],
  hampi: [
    { id: 'ham-1', name: 'Sunrise Hike to Matanga Hill', time: '05:30 AM', category: 'adventure', cost: 0, notes: 'Panoramic 360-degree sunrise view over ruins', locationName: 'Matanga Hill' },
    { id: 'ham-2', name: 'Explore Virupaksha Temple & Hampi Bazaar', time: '09:00 AM', category: 'culture', cost: 100, notes: '7th-century active temple complex', locationName: 'Hampi Bazaar' },
    { id: 'ham-3', name: 'Vittala Temple Stone Chariot Tour', time: '02:30 PM', category: 'sightseeing', cost: 600, notes: 'Famous musical pillars and stone chariot', locationName: 'Vittala Complex' },
    { id: 'ham-4', name: 'Coracle Boat Ride across Tungabhadra River', time: '05:00 PM', category: 'relaxation', cost: 300, notes: 'Traditional round basket boat ride', locationName: 'Anegundi Bank' }
  ],
  munnar: [
    { id: 'mun-1', name: 'Tea Plantation Trek & KDHP Factory Tour', time: '08:30 AM', category: 'sightseeing', cost: 300, notes: 'Learn tea processing & enjoy fresh tea tasting', locationName: 'Tata Tea Museum' },
    { id: 'mun-2', name: 'Eravikulam National Park Safari', time: '11:30 AM', category: 'adventure', cost: 500, notes: 'Spot rare Nilgiri Tahr mountain goats', locationName: 'Rajamalai Peak' },
    { id: 'mun-3', name: 'Boating at Mattupetty Dam & Echo Point', time: '03:00 PM', category: 'relaxation', cost: 400, notes: 'Speed boat ride amidst pine forests', locationName: 'Mattupetty' }
  ],
  udaipur: [
    { id: 'uda-1', name: 'Guided Tour of Udaipur City Palace Museum', time: '09:30 AM', category: 'culture', cost: 400, notes: 'Explore royal peacock courtyards', locationName: 'City Palace' },
    { id: 'uda-2', name: 'Jagdish Temple Visit & Lal Ghat Walk', time: '12:00 PM', category: 'culture', cost: 0, notes: 'Intricate Indo-Aryan stone carvings', locationName: 'Lal Ghat' },
    { id: 'uda-3', name: 'Lake Pichola Sunset Boat Cruise to Jagmandir', time: '05:00 PM', category: 'relaxation', cost: 800, notes: 'Includes island palace stopover', locationName: 'Rameshwar Ghat' },
    { id: 'uda-4', name: 'Rooftop Dinner overlooking Lit-Up Palace', time: '08:00 PM', category: 'food', cost: 1500, notes: 'Authentic Ker Sangri & Laal Maas', locationName: 'Ambrai Ghat' }
  ],
  varanasi: [
    { id: 'var-1', name: 'Sunrise Boat Ride on Ganges River', time: '05:45 AM', category: 'culture', cost: 500, notes: 'Witness morning rituals along Dashashwamedh', locationName: 'Assi Ghat' },
    { id: 'var-2', name: 'Kashi Vishwanath Temple Darshan', time: '09:00 AM', category: 'culture', cost: 0, notes: 'Sacred golden-spired temple of Lord Shiva', locationName: 'Vishwanath Gali' },
    { id: 'var-3', name: 'Sarnath Buddhist Stupa Day Tour', time: '02:00 PM', category: 'sightseeing', cost: 300, notes: 'Site of Buddha\'s first sermon', locationName: 'Sarnath Deer Park' },
    { id: 'var-4', name: 'Grand Evening Ganga Aarti Ceremony', time: '06:15 PM', category: 'culture', cost: 0, notes: 'Spectacular brass lamp worship rituals', locationName: 'Dashashwamedh Ghat' }
  ],
  gokarna: [
    { id: 'gok-1', name: 'Five Beach Trek (Kudle to Paradise Beach)', time: '07:00 AM', category: 'adventure', cost: 0, notes: 'Scenic cliffside coastal hiking trail', locationName: 'Kudle Beach' },
    { id: 'gok-2', name: 'Mahabaleshwar Ancient Temple Visit', time: '11:00 AM', category: 'culture', cost: 0, notes: 'Dravidian architecture Atmalinga shrine', locationName: 'Gokarna Town' },
    { id: 'gok-3', name: 'Sunset Relax & Shacks Dining at Om Beach', time: '05:00 PM', category: 'relaxation', cost: 700, notes: 'Fresh seafood & woodfired pizzas', locationName: 'Om Beach' }
  ],
  darjeeling: [
    { id: 'dar-1', name: 'Tiger Hill Sunrise over Mount Kanchenjunga', time: '04:15 AM', category: 'sightseeing', cost: 400, notes: 'Golden rays on Himalayan peaks', locationName: 'Tiger Hill' },
    { id: 'dar-2', name: 'Joyride on Himalayan Railway Toy Train', time: '09:30 AM', category: 'sightseeing', cost: 1000, notes: 'UNESCO heritage steam engine ride', locationName: 'Darjeeling Station' },
    { id: 'dar-3', name: 'Happy Valley Tea Estate Plucking Tour', time: '02:00 PM', category: 'food', cost: 250, notes: 'Sample original Darjeeling First Flush tea', locationName: 'Happy Valley' }
  ],
  ooty: [
    { id: 'oot-1', name: 'Nilgiri Mountain Railway Toy Train Ride', time: '09:00 AM', category: 'sightseeing', cost: 300, notes: 'Ride past tunnels, bridges, and tea slopes', locationName: 'Ooty Railway Station' },
    { id: 'oot-2', name: 'Stroll in Government Botanical Garden', time: '12:00 PM', category: 'relaxation', cost: 100, notes: '55-acre terraced garden with exotic flora', locationName: 'Vanguard Road' },
    { id: 'oot-3', name: 'Boating on Ooty Lake & Pykara Waterfalls', time: '03:00 PM', category: 'relaxation', cost: 500, notes: 'Pedal boating amidst eucalyptus trees', locationName: 'Ooty Lake' }
  ],
  pune: [
    { id: 'pne-1', name: 'Shaniwar Wada Fort & Peshwa History Tour', time: '09:30 AM', category: 'culture', cost: 150, notes: 'Historic 18th-century seat of Peshwa rulers', locationName: 'Shaniwar Peth' },
    { id: 'pne-2', name: 'Visit Aga Khan Palace & Gandhi Memorial', time: '12:30 PM', category: 'culture', cost: 100, notes: 'Stately Italian arches & serene gardens', locationName: 'Kalyani Nagar' },
    { id: 'pne-3', name: 'Trek to Sinhagad Fort & Enjoy Pithla Bhakri', time: '04:00 PM', category: 'adventure', cost: 300, notes: 'Panoramic sunset view over Western Ghats valleys', locationName: 'Sinhagad Ghat' },
    { id: 'pne-4', name: 'Cafe Hopping & Street Food in Koregaon Park', time: '07:30 PM', category: 'food', cost: 600, notes: 'Try Puneri Misal Pav & Bakarwadi', locationName: 'Koregaon Park' }
  ],
  shillong: [
    { id: 'shi-1', name: 'Day Trip to Cherrapunji & Nohkalikai Falls', time: '08:00 AM', category: 'sightseeing', cost: 1800, notes: 'India\'s tallest plunge waterfall view', locationName: 'Cherrapunji' },
    { id: 'shi-2', name: 'Walk across Jingmaham Living Root Bridge', time: '11:30 AM', category: 'adventure', cost: 100, notes: 'Ancient Bio-engineering by Khasi tribe', locationName: 'Nongriat Village' },
    { id: 'shi-3', name: 'Boating on Crystal Clear Dawki River', time: '03:00 PM', category: 'relaxation', cost: 800, notes: 'Glass-like transparent water boat ride', locationName: 'Umngot River, Dawki' }
  ],
  srinagar: [
    { id: 'sri-1', name: 'Shikara Ride on Dal Lake & Floating Market', time: '06:00 AM', category: 'relaxation', cost: 700, notes: 'Sunrise floating vegetable market', locationName: 'Dal Lake Gate 1' },
    { id: 'sri-2', name: 'Mughal Gardens Tour (Shalimar & Nishat Bagh)', time: '10:30 AM', category: 'sightseeing', cost: 150, notes: 'Terraced lawns and Zabarwan hill backdrop', locationName: 'Boulevard Road' },
    { id: 'sri-3', name: 'Gulmarg Gondola Cable Car Ride Phase 1 & 2', time: '01:30 PM', category: 'adventure', cost: 1800, notes: 'Touch snow at 14,000 ft altitude', locationName: 'Gulmarg' }
  ],
  andaman: [
    { id: 'and-1', name: 'Scuba Diving at Havelock Elephant Beach', time: '08:00 AM', category: 'adventure', cost: 3500, notes: 'PADI certified instructor dive with corals', locationName: 'Havelock Island' },
    { id: 'and-2', name: 'Relaxation & Sunset at Radhanagar Beach', time: '03:30 PM', category: 'relaxation', cost: 0, notes: 'Voted one of Asia\'s best beaches', locationName: 'Beach No. 7' },
    { id: 'and-3', name: 'Cellular Jail Heritage Tour & Light Show', time: '06:00 PM', category: 'culture', cost: 300, notes: 'Historic freedom fighter memorial', locationName: 'Port Blair' }
  ],
  mumbai: [
    { id: 'mum-1', name: 'Gateway of India & Elephanta Caves Boat Tour', time: '09:00 AM', category: 'culture', cost: 850, notes: 'Ferry ride to 5th-century rock-cut Shiva caves', locationName: 'Colaba' },
    { id: 'mum-2', name: 'Colonial Architecture Walk & Kala Ghoda Arts', time: '02:00 PM', category: 'culture', cost: 0, notes: 'Victoria Terminus, Oval Maidan & museums', locationName: 'Fort District' },
    { id: 'mum-3', name: 'Sunset Promenade & Street Food at Marine Drive', time: '06:00 PM', category: 'food', cost: 500, notes: 'Try Vada Pav, Pav Bhaji & Bhel Puri', locationName: 'Girgaon Chowpatty' }
  ],
  shimla: [
    { id: 'shm-1', name: 'Heritage Walk along Shimla Mall Road & Ridge', time: '10:00 AM', category: 'sightseeing', cost: 0, notes: 'Visit Christ Church & Gaiety Theatre', locationName: 'The Ridge' },
    { id: 'shm-2', name: 'Excursion to Kufri Snow Viewpoint & Fun Park', time: '01:30 PM', category: 'adventure', cost: 1000, notes: 'Yak riding and Himalayan panorama', locationName: 'Kufri' },
    { id: 'shm-3', name: 'Jakhu Temple Hill Trek & Giant Hanuman Statue', time: '04:30 PM', category: 'culture', cost: 200, notes: 'Highest point in Shimla city', locationName: 'Jakhu Hill' }
  ],
  alleppey: [
    { id: 'all-1', name: 'Private Houseboat Backwater Day Cruise', time: '11:00 AM', category: 'relaxation', cost: 4500, notes: 'Includes traditional Karimeen fish lunch onboard', locationName: 'Punnamada Jetty' },
    { id: 'all-2', name: 'Canoe Kayaking through Narrow Village Canals', time: '03:30 PM', category: 'adventure', cost: 800, notes: 'Observe local paddy farming & duck rearing', locationName: 'Kuttanad' },
    { id: 'all-3', name: 'Sunset Walk at Marari Beach', time: '06:00 PM', category: 'relaxation', cost: 0, notes: 'Pristine quiet coconut grove beach', locationName: 'Mararikulam' }
  ],
  coorg: [
    { id: 'crg-1', name: 'Namdroling Golden Temple Tibetan Monastery', time: '09:00 AM', category: 'culture', cost: 0, notes: '40ft gilded Buddha statues & prayer wheels', locationName: 'Bylakuppe' },
    { id: 'crg-2', name: 'Abbey Falls Nature Walk & Coffee Estate Tour', time: '01:00 PM', category: 'sightseeing', cost: 250, notes: 'Walk among spice plantations & coffee beans', locationName: 'Madikeri' },
    { id: 'crg-3', name: 'Sunset at Raja\'s Seat & Musical Fountain', time: '05:30 PM', category: 'relaxation', cost: 50, notes: 'Royal viewpoint overlooking misty valleys', locationName: 'Madikeri Town' }
  ],
  kodaikanal: [
    { id: 'kod-1', name: 'Cycling & Boating around Kodai Lake', time: '09:00 AM', category: 'relaxation', cost: 300, notes: 'Rent double bicycles around 5km lake perimeter', locationName: 'Kodai Lake' },
    { id: 'kod-2', name: 'Coaker\'s Walk & Pillar Rocks Viewpoint', time: '01:30 PM', category: 'sightseeing', cost: 100, notes: '1km mountain ledge walk with cloud valley view', locationName: 'Coaker\'s Walk' },
    { id: 'kod-3', name: 'Pine Forest Hike & Kurinji Andavar Temple', time: '04:30 PM', category: 'adventure', cost: 50, notes: 'Famous movie shooting spot in cedar trees', locationName: 'Pine Forest' }
  ],
  pondicherry: [
    { id: 'pon-1', name: 'Heritage French Quarter Heritage Cycle Tour', time: '07:30 AM', category: 'culture', cost: 350, notes: 'Mustard yellow villas, street art & bakeries', locationName: 'White Town' },
    { id: 'pon-2', name: 'Visit Auroville Matrimandir & Organic Cafe', time: '11:00 AM', category: 'relaxation', cost: 0, notes: 'Golden dome meditation center', locationName: 'Auroville' },
    { id: 'pon-3', name: 'Sunset Walk along Promenade Beach', time: '05:30 PM', category: 'relaxation', cost: 0, notes: 'French cuisine dinner at seaside cafe', locationName: 'Goubert Avenue' }
  ],
  agra: [
    { id: 'agr-1', name: 'Sunrise Tour of Taj Mahal', time: '06:00 AM', category: 'sightseeing', cost: 1100, notes: 'Best lighting for marble photography with lower crowd', locationName: 'Taj Mahal East Gate' },
    { id: 'agr-2', name: 'Guided Tour of Agra Red Fort', time: '10:30 AM', category: 'culture', cost: 600, notes: 'Mughal royal residences & Musamman Burj', locationName: 'Agra Fort' },
    { id: 'agr-3', name: 'Sunset View of Taj Mahal from Mehtab Bagh', time: '05:30 PM', category: 'sightseeing', cost: 300, notes: 'Reflecting view across Yamuna river', locationName: 'Mehtab Bagh' }
  ],

  wayanad: [
    { id: 'way-1', name: 'Edakkal Caves Prehistoric Petroglyph Trek', time: '08:30 AM', category: 'adventure', cost: 200, notes: 'Neolithic age cave rock carvings', locationName: 'Ambukuthi Mala' },
    { id: 'way-2', name: 'Banasura Sagar Dam Speedboat Ride', time: '01:00 PM', category: 'relaxation', cost: 450, notes: 'Largest earthen dam in India', locationName: 'Padinjarathara' },
    { id: 'way-3', name: 'Wayanad Wildlife Safari at Muthanga', time: '04:00 PM', category: 'adventure', cost: 800, notes: 'Spot wild elephants, deer & peacocks', locationName: 'Muthanga Forest' }
  ],
  spiti: [
    { id: 'spi-1', name: 'Key Monastery Tour & Morning Chanting', time: '09:00 AM', category: 'culture', cost: 100, notes: '1000-year-old cliffside Tibetan monastery', locationName: 'Key Village' },
    { id: 'spi-2', name: 'Visit Hikkim (World\'s Highest Post Office)', time: '01:00 PM', category: 'sightseeing', cost: 50, notes: 'Send postcards stamped from 14,567 ft', locationName: 'Hikkim Village' },
    { id: 'spi-3', name: 'Chandratal Lake Sunset Camping Trek', time: '04:30 PM', category: 'adventure', cost: 1500, notes: 'High altitude crescent Moon Lake view', locationName: 'Chandratal' }
  ],
  varkala: [
    { id: 'vrk-1', name: 'Cliffside Sunrise Yoga Session', time: '07:00 AM', category: 'relaxation', cost: 400, notes: 'Guided hatha yoga overlooking ocean waves', locationName: 'North Cliff' },
    { id: 'vrk-2', name: 'Papanasam Beach Holy Dip & Surfing Lesson', time: '10:00 AM', category: 'adventure', cost: 1500, notes: 'Surfing beginner class with certified instructor', locationName: 'Varkala Beach' },
    { id: 'vrk-3', name: 'Seafood Cafe Hopping on Varkala Cliff', time: '06:30 PM', category: 'food', cost: 900, notes: 'Fresh grilled fish & sunset views', locationName: 'North Cliff Walkway' }
  ],
  kaziranga: [
    { id: 'kaz-1', name: 'Early Morning Elephant Safari', time: '05:30 AM', category: 'adventure', cost: 1200, notes: 'Close encounter with One-Horned Rhinos in elephant grass', locationName: 'Central Range Kohora' },
    { id: 'kaz-2', name: 'Kaziranga National Orchid & Biodiversity Park', time: '11:00 AM', category: 'sightseeing', cost: 200, notes: 'Over 500 indigenous orchid species', locationName: 'Durgapur' },
    { id: 'kaz-3', name: 'Jeep Safari through Western Bagori Range', time: '02:30 PM', category: 'adventure', cost: 2000, notes: 'Spot wild water buffalo, tigers & migratory birds', locationName: 'Bagori Range' }
  ],
  mahabalipuram: [
    { id: 'mhb-1', name: 'Shore Temple Sunrise Guided Architecture Tour', time: '06:30 AM', category: 'sightseeing', cost: 600, notes: '8th-century granite sea temple built by Pallavas', locationName: 'Beach Road' },
    { id: 'mhb-2', name: 'Pancha Rathas Monolithic Rock Cut Temples', time: '10:30 AM', category: 'culture', cost: 200, notes: 'Five chariots carved from single rock boulders', locationName: 'Ratha Street' },
    { id: 'mhb-3', name: 'Arjuna\'s Penance Relief Sculpture & Krishna\'s Butterball', time: '03:00 PM', category: 'sightseeing', cost: 0, notes: 'World\'s largest open-air rock bas-relief', locationName: 'West Raja Street' }
  ],
  gangtok: [
    { id: 'gtk-1', name: 'Tsomgo Glacial Lake & Baba Mandir Excursion', time: '08:00 AM', category: 'adventure', cost: 2200, notes: 'Yak rides around turquoise snow-melt lake at 12,400ft', locationName: 'Jawaharlal Nehru Road' },
    { id: 'gtk-2', name: 'Rumtek Monastery Chanting & Cultural Tour', time: '01:30 PM', category: 'culture', cost: 100, notes: 'Seat of Karmapa Lama with rare Buddhist artifacts', locationName: 'Rumtek' },
    { id: 'gtk-3', name: 'MG Marg Evening Promenade & Momo Feast', time: '06:00 PM', category: 'food', cost: 400, notes: 'Litter-free eco pedestrian street with cafes', locationName: 'MG Marg' }
  ],
  kutch: [
    { id: 'ktc-1', name: 'Kalo Dungar (Black Hill) Highest Viewpoint', time: '09:00 AM', category: 'sightseeing', cost: 100, notes: 'Panoramic view of Great Rann salt flat border', locationName: 'Khatian' },
    { id: 'ktc-2', name: 'Kutchi Handicrafts Artisan Village Tour', time: '01:30 PM', category: 'culture', cost: 0, notes: 'Witness Rogan art, Ajrakh block printing & embroidery', locationName: 'Nirona & Bhujodi' },
    { id: 'ktc-3', name: 'Sunset & Moonrise over White Salt Desert', time: '05:00 PM', category: 'sightseeing', cost: 500, notes: 'Mesmerizing white salt expanse under golden hour', locationName: 'Dhordo Salt Desert' }
  ],
  chikmagalur: [
    { id: 'ckm-1', name: 'Mullayanagiri Peak Sunrise Trek', time: '05:30 AM', category: 'adventure', cost: 0, notes: 'Trek to highest peak in Karnataka (1,930m)', locationName: 'Mullayanagiri' },
    { id: 'ckm-2', name: 'Hebbe Falls Jeep Safari through Coffee Estate', time: '11:00 AM', category: 'adventure', cost: 1200, notes: 'Off-road jungle drive to double-tiered waterfall', locationName: 'Kemmangundi Road' },
    { id: 'ckm-3', name: 'Coffee Museum Tour & Fresh Roast Tasting', time: '03:30 PM', category: 'food', cost: 150, notes: 'Learn rich coffee history of India', locationName: 'Dasarahalli' }
  ]
};

export const defaultGenericActivities: Activity[] = [
  { id: 'gen-1', name: 'Local City Guided Sightseeing', time: '09:30 AM', category: 'sightseeing', cost: 800, notes: 'Visit top rated local attractions' },
  { id: 'gen-2', name: 'Authentic Regional Culinary Tasting', time: '01:00 PM', category: 'food', cost: 650, notes: 'Sample popular local food joints' },
  { id: 'gen-3', name: 'Sunset Viewpoint & Photography', time: '05:45 PM', category: 'relaxation', cost: 0, notes: 'Capture scenic golden hour photos' },
  { id: 'gen-4', name: 'Souvenir Shopping at Main Market', time: '07:30 PM', category: 'culture', cost: 500, notes: 'Local handicrafts & specialty items' }
];
