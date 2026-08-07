import { Destination } from '../types/destination';

export const mockDestinations: Destination[] = [
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    country: 'India',
    type: 'beaches',
    weather: 'sunny',
    budgetLevel: 'medium',
    pricePerDay: 3500,
    rating: 4.8,
    bestSeason: 'November to February',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Golden sand beaches, vibrant night markets, Portuguese heritage architecture, and thrilling watersports on the Arabian coastline.',
    coordinates: { lat: 15.2993, lng: 74.1240 }
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    country: 'India',
    type: 'mountains',
    weather: 'snowy',
    budgetLevel: 'medium',
    pricePerDay: 2800,
    rating: 4.7,
    bestSeason: 'October to May',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Snow-capped Himalayan peaks, pine valleys, Solang valley adventures, and cozy mountain cafes beside the Beas River.',
    coordinates: { lat: 32.2432, lng: 77.1892 }
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    type: 'heritage',
    weather: 'sunny',
    budgetLevel: 'medium',
    pricePerDay: 3200,
    rating: 4.9,
    bestSeason: 'October to March',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The iconic Pink City featuring royal palaces, Amer Fort, Hawa Mahal, bustling bazaars, and rich Rajasthani culinary tours.',
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },
  {
    id: 'leh',
    name: 'Leh Ladakh',
    state: 'Ladakh',
    country: 'India',
    type: 'adventure',
    weather: 'snowy',
    budgetLevel: 'high',
    pricePerDay: 5500,
    rating: 4.9,
    bestSeason: 'May to September',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-altitude desert mountain passes, azure Pangong Tso lake, ancient Buddhist monasteries, and world-class road trip trails.',
    coordinates: { lat: 34.1526, lng: 77.5771 }
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    country: 'India',
    type: 'adventure',
    weather: 'mild',
    budgetLevel: 'low',
    pricePerDay: 1800,
    rating: 4.6,
    bestSeason: 'September to April',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Yoga capital of the world on the holy Ganges River, famous for white-water rafting, bungee jumping, and spiritual evening Aarti.',
    coordinates: { lat: 30.0869, lng: 78.2676 }
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    country: 'India',
    type: 'heritage',
    weather: 'sunny',
    budgetLevel: 'low',
    pricePerDay: 1500,
    rating: 4.8,
    bestSeason: 'October to February',
    crowdLevel: 'low',
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'UNESCO World Heritage boulder-strewn landscape detailing the majestic 14th-century ruins of the Vijayanagara Empire.',
    coordinates: { lat: 15.3350, lng: 76.4600 }
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    country: 'India',
    type: 'mountains',
    weather: 'rainy',
    budgetLevel: 'medium',
    pricePerDay: 3000,
    rating: 4.7,
    bestSeason: 'September to March',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Rolling green tea plantations, misty hill valleys, waterfalls, and endangered Nilgiri Tahr wildlife sanctuaries.',
    coordinates: { lat: 10.0889, lng: 77.0595 }
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    type: 'heritage',
    weather: 'sunny',
    budgetLevel: 'high',
    pricePerDay: 4800,
    rating: 4.9,
    bestSeason: 'September to March',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'City of Lakes boasting romantic marble palaces floating on Lake Pichola, intricate temples, and majestic sunset boat cruises.',
    coordinates: { lat: 24.5854, lng: 73.7125 }
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    country: 'India',
    type: 'heritage',
    weather: 'mild',
    budgetLevel: 'low',
    pricePerDay: 1600,
    rating: 4.8,
    bestSeason: 'November to February',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'One of the oldest living cities in the world, renowned for spiritual river ghats, morning boat rides, and mesmerizing Ganga Aarti.',
    coordinates: { lat: 25.3176, lng: 82.9739 }
  },
  {
    id: 'gokarna',
    name: 'Gokarna',
    state: 'Karnataka',
    country: 'India',
    type: 'beaches',
    weather: 'sunny',
    budgetLevel: 'low',
    pricePerDay: 2000,
    rating: 4.6,
    bestSeason: 'October to March',
    crowdLevel: 'low',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Serene beach town with pristine crescent-shaped shores (Om Beach, Kudle Beach), cliffside hikes, and laid-back seaside shacks.',
    coordinates: { lat: 14.5479, lng: 74.3188 }
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    country: 'India',
    type: 'mountains',
    weather: 'mild',
    budgetLevel: 'medium',
    pricePerDay: 2700,
    rating: 4.7,
    bestSeason: 'October to December, March to May',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Queen of the Hills offering panoramic views of Mount Kanchenjunga, historic UNESCO Toy Train, and lush tea estates.',
    coordinates: { lat: 27.0410, lng: 88.2663 }
  },
  {
    id: 'ooty',
    name: 'Ooty',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'mountains',
    weather: 'mild',
    budgetLevel: 'medium',
    pricePerDay: 2600,
    rating: 4.5,
    bestSeason: 'October to June',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming Nilgiri hill station famous for botanical gardens, serene lakes, eucalyptus groves, and heritage steam train rides.',
    coordinates: { lat: 11.4102, lng: 76.6950 }
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    state: 'Rajasthan',
    country: 'India',
    type: 'adventure',
    weather: 'sunny',
    budgetLevel: 'medium',
    pricePerDay: 3100,
    rating: 4.8,
    bestSeason: 'November to March',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The Golden City of the Thar Desert featuring yellow sandstone fortresses, dune camel safaris, and overnight desert glamping.',
    coordinates: { lat: 26.9157, lng: 70.9083 }
  },
  {
    id: 'shillong',
    name: 'Shillong',
    state: 'Meghalaya',
    country: 'India',
    type: 'adventure',
    weather: 'rainy',
    budgetLevel: 'medium',
    pricePerDay: 2900,
    rating: 4.8,
    bestSeason: 'September to May',
    crowdLevel: 'low',
    imageUrl: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Scotland of the East with dramatic waterfalls, living root bridges of Cherrapunji, crystal-clear Dawki river, and rock music culture.',
    coordinates: { lat: 25.5788, lng: 91.8933 }
  },
  {
    id: 'srinagar',
    name: 'Srinagar',
    state: 'Jammu & Kashmir',
    country: 'India',
    type: 'mountains',
    weather: 'snowy',
    budgetLevel: 'high',
    pricePerDay: 4600,
    rating: 4.9,
    bestSeason: 'April to October',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Jewel of Kashmir known for romantic Shikara rides on Dal Lake, heritage houseboats, Mughal gardens, and winter Gulmarg ski slopes.',
    coordinates: { lat: 34.0837, lng: 74.7973 }
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    state: 'Andaman & Nicobar',
    country: 'India',
    type: 'beaches',
    weather: 'sunny',
    budgetLevel: 'high',
    pricePerDay: 6200,
    rating: 4.9,
    bestSeason: 'October to May',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Turquoise waters, coral reef scuba diving at Radhanagar Beach, cellular jail history, and pristine tropical rain forests.',
    coordinates: { lat: 11.6234, lng: 92.7265 }
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    type: 'city',
    weather: 'mild',
    budgetLevel: 'high',
    pricePerDay: 5000,
    rating: 4.6,
    bestSeason: 'November to February',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Maximum City: Gateway of India, iconic Marine Drive sunset walks, heritage Colonial architecture, and world-class street food.',
    coordinates: { lat: 19.0760, lng: 72.8777 }
  },
  {
    id: 'shimla',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    country: 'India',
    type: 'mountains',
    weather: 'snowy',
    budgetLevel: 'medium',
    pricePerDay: 3000,
    rating: 4.6,
    bestSeason: 'March to June, December to February',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Colonial hill capital with Mall Road shopping, Christ Church landmark, Kalka-Shimla toy train, and snow-filled pine woods.',
    coordinates: { lat: 31.1048, lng: 77.1734 }
  },
  {
    id: 'alleppey',
    name: 'Alleppey',
    state: 'Kerala',
    country: 'India',
    type: 'beaches',
    weather: 'mild',
    budgetLevel: 'medium',
    pricePerDay: 3600,
    rating: 4.8,
    bestSeason: 'September to March',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Venice of the East featuring tranquil backwater cruises on traditional Kettuvallam houseboats, coconut lagoons, and Marari beach sunsets.',
    coordinates: { lat: 9.4981, lng: 76.3388 }
  },
  {
    id: 'coorg',
    name: 'Coorg',
    state: 'Karnataka',
    country: 'India',
    type: 'mountains',
    weather: 'rainy',
    budgetLevel: 'medium',
    pricePerDay: 3200,
    rating: 4.7,
    bestSeason: 'October to March',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Scotland of India famous for fragrant coffee plantations, Abbey Falls, Namdroling Tibetan Monastery, and misty Kodagu hills.',
    coordinates: { lat: 12.4244, lng: 75.7382 }
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'mountains',
    weather: 'mild',
    budgetLevel: 'low',
    pricePerDay: 2200,
    rating: 4.6,
    bestSeason: 'September to May',
    crowdLevel: 'low',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The Princess of Hill Stations known for star-shaped Kodai Lake, Coakers Walk, Pillar Rocks, and pine forest nature trails.',
    coordinates: { lat: 10.2381, lng: 77.4892 }
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry',
    state: 'Puducherry',
    country: 'India',
    type: 'heritage',
    weather: 'sunny',
    budgetLevel: 'medium',
    pricePerDay: 2800,
    rating: 4.7,
    bestSeason: 'October to March',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'French Riviera of the East with mustard-yellow colonial mansions, Sri Aurobindo Ashram, experimental city Auroville, and seaside cafes.',
    coordinates: { lat: 11.9416, lng: 79.8083 }
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    country: 'India',
    type: 'heritage',
    weather: 'sunny',
    budgetLevel: 'medium',
    pricePerDay: 3300,
    rating: 4.9,
    bestSeason: 'October to March',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Home to the iconic Taj Mahal—one of the Seven Wonders of the World—alongside Agra Fort and Fatehpur Sikri Mughal wonders.',
    coordinates: { lat: 27.1767, lng: 78.0081 }
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    country: 'India',
    type: 'heritage',
    weather: 'mild',
    budgetLevel: 'low',
    pricePerDay: 1900,
    rating: 4.9,
    bestSeason: 'November to March',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Spiritual heart of Sikhism featuring the shimmering Golden Temple (Sri Harmandir Sahib), Wagah Border ceremony, and rich Punjabi cuisine.',
    coordinates: { lat: 31.6340, lng: 74.8723 }
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    state: 'Kerala',
    country: 'India',
    type: 'adventure',
    weather: 'rainy',
    budgetLevel: 'medium',
    pricePerDay: 2900,
    rating: 4.7,
    bestSeason: 'October to May',
    crowdLevel: 'low',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Mist-clad mountains, prehistoric Edakkal Cave petroglyphs, bamboo forests, wildlife sanctuaries, and heart-shaped Chembra Lake.',
    coordinates: { lat: 11.6854, lng: 76.1320 }
  },
  {
    id: 'spiti',
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    country: 'India',
    type: 'adventure',
    weather: 'snowy',
    budgetLevel: 'high',
    pricePerDay: 4200,
    rating: 4.9,
    bestSeason: 'May to October',
    crowdLevel: 'low',
    imageUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Rugged cold desert trans-Himalayan wonderland, 1000-year-old Key Monastery, Chandratal crescent lake, and highest village postal offices.',
    coordinates: { lat: 32.2461, lng: 78.0349 }
  },
  {
    id: 'varkala',
    name: 'Varkala',
    state: 'Kerala',
    country: 'India',
    type: 'beaches',
    weather: 'sunny',
    budgetLevel: 'low',
    pricePerDay: 2100,
    rating: 4.8,
    bestSeason: 'October to March',
    crowdLevel: 'low',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Dramatic red laterite cliffs bordering Arabian Sea, Papanasam beach holy waters, clifftop bohemian cafes, and Ayurvedic retreats.',
    coordinates: { lat: 8.7379, lng: 76.7163 }
  },
  {
    id: 'kaziranga',
    name: 'Kaziranga',
    state: 'Assam',
    country: 'India',
    type: 'adventure',
    weather: 'mild',
    budgetLevel: 'medium',
    pricePerDay: 3500,
    rating: 4.8,
    bestSeason: 'November to April',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'UNESCO sanctuary world famous as the prime stronghold of the endangered Great Indian One-Horned Rhinoceros and wild elephant safaris.',
    coordinates: { lat: 26.5775, lng: 93.1711 }
  },
  {
    id: 'mahabalipuram',
    name: 'Mahabalipuram',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'heritage',
    weather: 'sunny',
    budgetLevel: 'low',
    pricePerDay: 2000,
    rating: 4.7,
    bestSeason: 'October to March',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ancient 7th-century Pallava coastal monuments, monolithic Shore Temple, Pancha Rathas rock temples, and giant Krishnas Butterball.',
    coordinates: { lat: 12.6269, lng: 80.1927 }
  },
  {
    id: 'gangtok',
    name: 'Gangtok',
    state: 'Sikkim',
    country: 'India',
    type: 'mountains',
    weather: 'mild',
    budgetLevel: 'medium',
    pricePerDay: 3100,
    rating: 4.8,
    bestSeason: 'September to June',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Capital of Sikkim with Buddhist Rumtek monastery, glacial Tsomgo Lake, Nathu La pass border views, and clean mountain promenade.',
    coordinates: { lat: 27.3389, lng: 88.6065 }
  },
  {
    id: 'kutch',
    name: 'Rann of Kutch',
    state: 'Gujarat',
    country: 'India',
    type: 'heritage',
    weather: 'sunny',
    budgetLevel: 'high',
    pricePerDay: 4500,
    rating: 4.8,
    bestSeason: 'November to February',
    crowdLevel: 'high',
    imageUrl: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Endless white salt desert landscape hosting the vibrant annual Rann Utsav festival, Kutchi embroidery villages, and starry full-moon nights.',
    coordinates: { lat: 23.7337, lng: 69.8597 }
  },
  {
    id: 'chikmagalur',
    name: 'Chikmagalur',
    state: 'Karnataka',
    country: 'India',
    type: 'mountains',
    weather: 'mild',
    budgetLevel: 'medium',
    pricePerDay: 2700,
    rating: 4.6,
    bestSeason: 'September to March',
    crowdLevel: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Coffee land of Karnataka featuring Mullayanagiri (highest peak in Karnataka), Hebbe Falls, aromatic coffee estate stays, and lush Western Ghats.',
    coordinates: { lat: 13.3161, lng: 75.7720 }
  }
];
