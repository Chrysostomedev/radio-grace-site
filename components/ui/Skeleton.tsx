/**
 * Composant UI — Skeleton (placeholder de chargement)
 */

import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200',
        className
      )}
      {...props}
    />
  );
}
