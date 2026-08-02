/**
 * Composant UI — Badge
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'flash' | 'accent' | 'success';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variantStyles: Record<string, string> = {
    default: 'bg-forest-100 text-forest-900',
    flash: 'bg-sun-100 text-sun-900 font-bold',
    accent: 'bg-terracotta-100 text-terracotta-900',
    success: 'bg-green-100 text-green-900',
  };

  return (
    <span
      className={cn('inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold', variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
