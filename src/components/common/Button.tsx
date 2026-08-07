import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] hover-gradient-effect';

  const variants = {
    primary: 'bg-slate-900 dark:bg-gradient-to-b dark:from-[#1F4A53] dark:via-[#2A3F50] dark:to-[#4C3B4E] text-white dark:text-[#E6FCFF] shadow-md shadow-slate-900/20 dark:shadow-teal-900/40 border border-transparent dark:border-teal-500/20 focus:ring-teal-400 dark:hover:brightness-110 dark:hover:border-teal-300/40 dark:hover:shadow-teal-500/20',
    secondary: 'bg-white/80 dark:bg-gradient-to-b dark:from-[#1F4A53]/80 dark:via-[#2A3F50]/80 dark:to-[#4C3B4E]/80 text-slate-800 dark:text-[#E6FCFF] shadow-sm border border-slate-200 dark:border-teal-500/20 backdrop-blur-md focus:ring-teal-400 dark:hover:brightness-110 dark:hover:border-teal-300/40',
    outline: 'border border-slate-300 dark:border-teal-400/30 bg-white/40 dark:bg-gradient-to-b dark:from-[#1F4A53]/40 dark:via-[#2A3F50]/40 dark:to-[#4C3B4E]/40 text-slate-800 dark:text-[#E6FCFF] backdrop-blur-md focus:ring-teal-400 dark:hover:brightness-110 dark:hover:border-teal-300/50',
    ghost: 'bg-transparent text-slate-800 dark:text-[#E6FCFF] focus:ring-teal-400 dark:hover:bg-teal-900/30 dark:hover:text-white',
    danger: 'bg-red-500 dark:bg-red-600 text-white focus:ring-red-500 dark:hover:brightness-110'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5 font-semibold'
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
