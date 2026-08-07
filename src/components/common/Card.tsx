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
          'site-card p-5 shadow-sm transition-all duration-300',
          hoverEffect && 'card-hover-pop cursor-pointer',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
