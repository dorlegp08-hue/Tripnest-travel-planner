import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        clsx(
          'bg-white dark:bg-darkBg-card rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm transition-all duration-300',
          hoverEffect && 'hover:shadow-xl hover:-translate-y-1 hover:border-brand-500/30 cursor-pointer',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
