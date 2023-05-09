import type { FC, ReactNode } from 'react';
import '@/tailwind.css';
import { TooltipProvider } from '@/tooltip';
import { Toaster } from '@/toast';

export const metadata = {
  title: 'Gravity | Beskar Labs Design System',
  description:
    'Gravity is an opinionated, predictable and pre-composed design system for building Next.js applications.',
};

const RootLayout: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body className="bg-white dark:bg-black">
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </body>
  </html>
);

export default RootLayout;
