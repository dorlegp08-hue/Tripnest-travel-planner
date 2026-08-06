import { WeatherType } from '../types/destination';

export interface WeatherData {
  temp: number; // in Celsius
  condition: string;
  humidity: number;
  windSpeed: number;
  weatherType: WeatherType;
  iconCode: string;
}

const fallbackWeatherMap: Record<WeatherType, WeatherData> = {
  sunny: { temp: 29, condition: 'Sunny & Clear', humidity: 55, windSpeed: 12, weatherType: 'sunny', iconCode: '01d' },
  rainy: { temp: 23, condition: 'Light Monsoon Rain', humidity: 88, windSpeed: 18, weatherType: 'rainy', iconCode: '10d' },
  snowy: { temp: 4, condition: 'Cold & Snowy', humidity: 75, windSpeed: 10, weatherType: 'snowy', iconCode: '13d' },
  mild: { temp: 22, condition: 'Pleasant & Breeze', humidity: 60, windSpeed: 8, weatherType: 'mild', iconCode: '02d' }
};

export async function fetchDestinationWeather(
  lat: number,
  lng: number,
  defaultType: WeatherType
): Promise<WeatherData> {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  if (!apiKey || apiKey === 'YOUR_OPENWEATHER_API_KEY') {
    // Return realistic mock weather based on destination type
    return {
      ...fallbackWeatherMap[defaultType],
      temp: fallbackWeatherMap[defaultType].temp + Math.floor(Math.random() * 5 - 2)
    };
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`
    );
    if (!res.ok) throw new Error('Weather API fetch failed');

    const data = await res.json();
    const mainCondition = data.weather[0]?.main?.toLowerCase() || '';

    let derivedType: WeatherType = defaultType;
    if (mainCondition.includes('rain') || mainCondition.includes('drizzle')) derivedType = 'rainy';
    else if (mainCondition.includes('snow')) derivedType = 'snowy';
    else if (mainCondition.includes('clear') || mainCondition.includes('sun')) derivedType = 'sunny';
    else derivedType = 'mild';

    return {
      temp: Math.round(data.main.temp),
      condition: data.weather[0]?.description || fallbackWeatherMap[derivedType].condition,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // convert m/s to km/h
      weatherType: derivedType,
      iconCode: data.weather[0]?.icon || '01d'
    };
  } catch (err) {
    return fallbackWeatherMap[defaultType];
  }
}
