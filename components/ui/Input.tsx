/**
 * Composant UI — Champ Input
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, type = 'text', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <div className="relative flex items-center">
          {icon && <div className="absolute left-3 text-slate-500">{icon}</div>}
          <input
            type={type}
            ref={ref}
            className={cn(
              'w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-forest-900 focus:ring-2 focus:ring-forest-900/20 transition-colors',
              icon ? 'pl-10' : '',
              error ? 'border-red-500 focus:border-red-500 focus:ring-red-900/20' : '',
              className
            )}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
