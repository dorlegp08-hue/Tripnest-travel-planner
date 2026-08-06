import { PackingItem } from '../types/bonus';
import { WeatherType } from '../types/destination';

export const defaultPackingByWeather: Record<WeatherType, PackingItem[]> = {
  sunny: [
    { id: 'pack-s1', name: 'SPF 50+ Sunscreen & Lip Balm', category: 'health', checked: false },
    { id: 'pack-s2', name: 'Polarized Sunglasses & Wide Hat', category: 'essentials', checked: false },
    { id: 'pack-s3', name: 'Light Cotton Clothes & Swimwear', category: 'clothing', checked: false },
    { id: 'pack-s4', name: 'Insulated Water Bottle', category: 'essentials', checked: false },
    { id: 'pack-s5', name: 'Waterproof Phone Pouch & Powerbank', category: 'electronics', checked: false },
    { id: 'pack-s6', name: 'Flip Flops & Breathable Sneakers', category: 'clothing', checked: false },
    { id: 'pack-s7', name: 'After-Sun Aloe Vera Gel', category: 'health', checked: false }
  ],
  snowy: [
    { id: 'pack-w1', name: 'Thermal Base Layers & Fleece', category: 'clothing', checked: false },
    { id: 'pack-w2', name: 'Heavy Down Jacket & Waterproof Gloves', category: 'clothing', checked: false },
    { id: 'pack-w3', name: 'Woolen Beanie, Scarf & Warm Socks', category: 'clothing', checked: false },
    { id: 'pack-w4', name: 'High-Traction Snow Boots', category: 'gear', checked: false },
    { id: 'pack-w5', name: 'Moisturizer & Cold Cream', category: 'health', checked: false },
    { id: 'pack-w6', name: 'Hand Warmers & Thermos Flask', category: 'essentials', checked: false },
    { id: 'pack-w7', name: 'UV Protection Snow Goggles', category: 'gear', checked: false }
  ],
  rainy: [
    { id: 'pack-r1', name: 'Compact Windproof Umbrella', category: 'essentials', checked: false },
    { id: 'pack-r2', name: 'Breathable Rain Poncho / Jacket', category: 'clothing', checked: false },
    { id: 'pack-r3', name: 'Waterproof Backpack Cover', category: 'gear', checked: false },
    { id: 'pack-r4', name: 'Quick-Dry Microfiber Towel', category: 'essentials', checked: false },
    { id: 'pack-r5', name: 'Mosquito Repellent Spray', category: 'health', checked: false },
    { id: 'pack-r6', name: 'Non-Slip Waterproof Trekking Shoes', category: 'gear', checked: false },
    { id: 'pack-r7', name: 'Ziplock Bags for Electronics', category: 'electronics', checked: false }
  ],
  mild: [
    { id: 'pack-m1', name: 'Light Cardigan or Windbreaker', category: 'clothing', checked: false },
    { id: 'pack-m2', name: 'Comfortable Walking Shoes / Loafers', category: 'clothing', checked: false },
    { id: 'pack-m3', name: 'Universal Travel Adapter & Powerbank', category: 'electronics', checked: false },
    { id: 'pack-m4', name: 'Personal First Aid & Medications', category: 'health', checked: false },
    { id: 'pack-m5', name: 'Travel Journal / Camera', category: 'electronics', checked: false },
    { id: 'pack-m6', name: 'Daypack for City Exploration', category: 'essentials', checked: false }
  ]
};
