/**
 * Composant UI — Avatar
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar({ src, alt = '', initials = '', size = 'md', className, ...props }: AvatarProps) {
  const sizeStyles: Record<string, string> = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-20 h-20 text-lg',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full bg-forest-100 text-forest-900 font-semibold',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-full" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
