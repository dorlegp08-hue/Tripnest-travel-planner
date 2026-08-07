import { create } from 'zustand';
import { WeatherType, BudgetLevel, DestinationType } from '../types/destination';

export type SortOption = 'popularity' | 'price-asc' | 'price-desc' | 'rating';

interface FilterState {
  searchQuery: string;
  selectedWeather: WeatherType[];
  selectedBudget: BudgetLevel[];
  selectedTypes: DestinationType[];
  sortBy: SortOption;
  
  setSearchQuery: (query: string) => void;
  toggleWeatherFilter: (weather: WeatherType) => void;
  toggleBudgetFilter: (budget: BudgetLevel) => void;
  toggleTypeFilter: (type: DestinationType) => void;
  setSortBy: (sort: SortOption) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  searchQuery: '',
  selectedWeather: [],
  selectedBudget: [],
  selectedTypes: [],
  sortBy: 'popularity',

  setSearchQuery: (query) => set({ searchQuery: query }),
  
  toggleWeatherFilter: (weather) =>
    set((state) => ({
      selectedWeather: state.selectedWeather.includes(weather)
        ? [] // Deselect if already selected
        : [weather] // Only one weather active at a time
    })),

  toggleBudgetFilter: (budget) =>
    set((state) => ({
      selectedBudget: state.selectedBudget.includes(budget)
        ? state.selectedBudget.filter((b) => b !== budget)
        : [...state.selectedBudget, budget]
    })),

  toggleTypeFilter: (type) =>
    set((state) => ({
      selectedTypes: state.selectedTypes.includes(type)
        ? state.selectedTypes.filter((t) => t !== type)
        : [...state.selectedTypes, type]
    })),

  setSortBy: (sort) => set({ sortBy: sort }),

  resetFilters: () =>
    set({
      searchQuery: '',
      selectedWeather: [],
      selectedBudget: [],
      selectedTypes: [],
      sortBy: 'popularity'
    })
}));
