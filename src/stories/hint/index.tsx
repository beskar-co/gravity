import type { FC, ReactNode } from 'react';

type HintProps = { children: ReactNode };

export const Hint: FC<HintProps> = ({ children }) => (
  <p className="text-sm text-neutral-500 dark:text-neutral-400">{children}</p>
);
