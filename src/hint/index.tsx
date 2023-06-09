import type { FC, ReactNode } from 'react';
import { forwardRef } from 'react';

type HintProps = { children: ReactNode };

export const Hint: FC<HintProps> = forwardRef<HTMLParagraphElement, HintProps>(
  ({ children }, ref) => (
    <p className="text-sm text-neutral-500 dark:text-neutral-400" ref={ref}>
      {children}
    </p>
  )
);
Hint.displayName = 'Hint';
