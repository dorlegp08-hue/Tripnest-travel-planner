export interface PackingItem {
  id: string;
  name: string;
  category: 'clothing' | 'essentials' | 'electronics' | 'health' | 'gear';
  checked: boolean;
  isCustom?: boolean;
}

export interface BudgetBreakdown {
  travel: number;
  stay: number;
  food: number;
  activities: number;
  misc: number;
  days: number;
  travelers: number;
}
