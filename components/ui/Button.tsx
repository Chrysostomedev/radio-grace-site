/**
 * Composant UI — Bouton
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles: Record<string, string> = {
      primary: 'bg-forest-900 text-ivory-100 hover:bg-forest-700 active:bg-forest-950',
      secondary: 'bg-sun-500 text-forest-900 hover:bg-sun-400 active:bg-sun-600',
      accent: 'bg-terracotta-500 text-ivory-100 hover:bg-terracotta-600 active:bg-terracotta-700',
      ghost: 'text-forest-900 hover:bg-ivory-100 active:bg-slate-200',
    };

    const sizeStyles: Record<string, string> = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
