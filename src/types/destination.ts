export type WeatherType = 'sunny' | 'rainy' | 'snowy' | 'mild';
export type BudgetLevel = 'low' | 'medium' | 'high';
export type DestinationType = 'mountains' | 'beaches' | 'heritage' | 'city' | 'adventure';
export type CrowdLevel = 'low' | 'medium' | 'high';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  country: string;
  type: DestinationType;
  weather: WeatherType;
  budgetLevel: BudgetLevel;
  pricePerDay: number;
  rating: number;
  bestSeason: string;
  crowdLevel: CrowdLevel;
  restricted?: boolean;
  imageUrl: string;
  galleryImages: string[];
  description: string;
  coordinates: Coordinates;
}
