import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ComparisonState {
  destinationIds: string[];
  addDestination: (id: string) => boolean; // returns false if max limit reached
  removeDestination: (id: string) => void;
  clearComparison: () => void;
  isInComparison: (id: string) => boolean;
}

export const useComparisonStore = create<ComparisonState>()(
  persist(
    (set, get) => ({
      destinationIds: ['goa', 'manali'], // default initial comparisons
      addDestination: (id: string) => {
        const current = get().destinationIds;
        if (current.includes(id)) return true;
        if (current.length >= 3) return false;
        set({ destinationIds: [...current, id] });
        return true;
      },
      removeDestination: (id: string) => {
        set({ destinationIds: get().destinationIds.filter((item) => item !== id) });
      },
      clearComparison: () => set({ destinationIds: [] }),
      isInComparison: (id: string) => get().destinationIds.includes(id)
    }),
    {
      name: 'tripnest-comparison-storage'
    }
  )
);
