import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const getVariantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-lg hover:scale-105 active:scale-95';
    case 'secondary':
      return 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300';
    case 'outline':
      return 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50';
    case 'ghost':
      return 'text-slate-700 hover:bg-slate-100';
    default:
      return '';
  }
};

const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return 'px-4 py-2 text-sm';
    case 'md':
      return 'px-6 py-3 text-base';
    case 'lg':
      return 'px-8 py-4 text-lg';
    default:
      return '';
  }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        getVariantClasses(variant),
        getSizeClasses(size),
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
