import React from 'react';
import { ArrowUp, ArrowDown, Trash2, Clock, MapPin } from 'lucide-react';
import { Activity } from '../../types/itinerary';

interface ActivityCardProps {
  activity: Activity;
  isFirst: boolean;
  isLast: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  isFirst,
  isLast,
  onMoveUp,
  onMoveDown,
  onDelete
}) => {
  const categoryColors = {
    sightseeing: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    food: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
    adventure: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
    relaxation: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
    culture: 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300',
    transport: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
  };

  return (
    <div className="group relative site-card card-hover-pop p-4 rounded-xl shadow-sm flex items-center justify-between gap-3">
      
      {/* Left Content */}
      <div className="space-y-1.5 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5 text-brand-500" /> {activity.time}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${categoryColors[activity.category] || categoryColors.sightseeing}`}>
            {activity.category}
          </span>
        </div>

        <h4 className="font-bold text-sm text-slate-900 dark:text-white font-display truncate">
          {activity.name}
        </h4>

        {activity.locationName && (
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-slate-400" /> {activity.locationName}
          </p>
        )}

        {activity.notes && (
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            "{activity.notes}"
          </p>
        )}
      </div>

      {/* Right Controls & Cost */}
      <div className="flex items-center gap-3 shrink-0">
        {activity.cost !== undefined && activity.cost > 0 && (
          <div className="text-right">
            <span className="text-xs font-extrabold text-brand-600 dark:text-brand-400 block">
              ₹{activity.cost}
            </span>
          </div>
        )}

        {/* Up/Down Move Reorder Controls */}
        <div className="flex flex-col gap-1">
          <button
            disabled={isFirst}
            onClick={onMoveUp}
            className="p-1 text-slate-400 hover:text-brand-500 disabled:opacity-30 disabled:hover:text-slate-400 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Move Up"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <button
            disabled={isLast}
            onClick={onMoveDown}
            className="p-1 text-slate-400 hover:text-brand-500 disabled:opacity-30 disabled:hover:text-slate-400 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Move Down"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Delete Activity Button */}
        <button
          onClick={onDelete}
          className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          title="Delete Activity"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
