import React, { useState } from 'react';
import { CheckSquare, Square, Plus, Trash2, Sun, CloudRain, Snowflake, Thermometer, Luggage } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { WeatherType } from '../../types/destination';
import { PackingItem } from '../../types/bonus';
import { defaultPackingByWeather } from '../../data/packingItems';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const PackingChecklist: React.FC = () => {
  const [selectedWeather, setSelectedWeather] = useState<WeatherType>('sunny');
  const [items, setItems] = useLocalStorage<PackingItem[]>(
    `tripnest-packing-${selectedWeather}`,
    defaultPackingByWeather[selectedWeather]
  );
  const [newItemName, setNewItemName] = useState('');

  // Switch weather preset
  const handleWeatherChange = (weather: WeatherType) => {
    setSelectedWeather(weather);
    const existing = window.localStorage.getItem(`tripnest-packing-${weather}`);
    if (existing) {
      setItems(JSON.parse(existing));
    } else {
      setItems(defaultPackingByWeather[weather]);
    }
  };

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: PackingItem = {
      id: `custom-pack-${Date.now()}`,
      name: newItemName.trim(),
      category: 'essentials',
      checked: false,
      isCustom: true
    };

    setItems((prev) => [...prev, newItem]);
    setNewItemName('');
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const checkedCount = items.filter((i) => i.checked).length;
  const progressPercent = items.length > 0 ? Math.round((checkedCount / items.length) * 100) : 0;

  const weatherTabs: { type: WeatherType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { type: 'sunny', label: 'Sunny / Beach', icon: Sun },
    { type: 'snowy', label: 'Snowy / Mountain', icon: Snowflake },
    { type: 'rainy', label: 'Rainy / Monsoon', icon: CloudRain },
    { type: 'mild', label: 'Mild / City Tour', icon: Thermometer }
  ];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
          <Luggage className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
            Smart Weather Packing Checklist
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tailored packing list generated based on climate type. Progress saves automatically in browser.
          </p>
        </div>
      </div>

      {/* Preset Weather Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {weatherTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = selectedWeather === tab.type;
          return (
            <button
              key={tab.type}
              onClick={() => handleWeatherChange(tab.type)}
              className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                isSelected
                  ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-darkBg-card text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Checklist Card */}
      <Card className="space-y-6">
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700 dark:text-slate-300">Packing Progress</span>
            <span className="text-brand-600 dark:text-brand-400">
              {checkedCount} / {items.length} Packed ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Add Custom Item Form */}
        <form onSubmit={addItem} className="flex gap-2">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Add custom packing item (e.g. GoPro camera, Powerbank)..."
            className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <Button type="submit" variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            Add Item
          </Button>
        </form>

        {/* Items List */}
        <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-xs ${
                item.checked
                  ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300/50 text-slate-400 line-through'
                  : 'bg-white dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-brand-300'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.checked ? (
                  <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0" />
                )}
                <span className="font-medium">{item.name}</span>
                {item.isCustom && (
                  <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[9px] font-bold text-slate-500 no-underline">
                    custom
                  </span>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(item.id);
                }}
                className="p-1 text-slate-400 hover:text-red-500 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </Card>
    </div>
  );
};
