import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'minimal';
}

export const Card: React.FC<CardProps> = ({ children, className, variant = 'default' }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'backdrop-blur-xl bg-white/80 border border-white/20';
      case 'minimal':
        return 'bg-transparent border border-slate-200';
      default:
        return 'bg-white border border-slate-200';
    }
  };

  return (
    <div
      className={clsx(
        'rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-md',
        getVariantClasses(),
        className
      )}
    >
      {children}
    </div>
  );
};
