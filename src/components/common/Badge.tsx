import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sunny' | 'rainy' | 'snowy' | 'mild' | 'low' | 'medium' | 'high' | 'brand' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  size = 'md',
  icon,
  className
}) => {
  const baseStyles = 'inline-flex items-center gap-1 font-medium rounded-full tracking-wide transition-all duration-300 ease-in-out hover-gradient-effect cursor-default';

  const variants = {
    sunny: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-300/50',
    rainy: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300/50',
    snowy: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-300/50',
    mild: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-300/50',
    low: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
    medium: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    high: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
    brand: 'bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300',
    outline: 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs font-semibold'
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
