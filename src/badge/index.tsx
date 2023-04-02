import clsx from 'clsx';
import { ReactNode, forwardRef } from 'react';

type BadgeProps = {
  children: ReactNode;
  size: 'md' | 'sm';
  variant: 'primary' | 'secondary' | 'tertiary';
};

const badgeSizes = {
  md: 'px-3 py-0.5 text-sm',
  sm: 'px-2.5 py-0.5 text-xs',
};

const badgeVariants = {
  primary: 'bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900',
  secondary:
    'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-100',
  tertiary:
    'bg-transparent border border-neutral-200 text-neutral-900 dark:border-neutral-700 dark:text-white',
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ size = 'md', variant = 'primary', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center rounded-full font-medium',
          badgeSizes[size],
          badgeVariants[variant]
        )}
        {...props}
      />
    );
  }
);
