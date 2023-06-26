import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaViewportProps & {
  orientation?: ScrollAreaPrimitive.ScrollAreaScrollbarProps['orientation'];
  invisible?: boolean;
};

export const ScrollArea: FC<ScrollAreaProps> = ({
  children,
  className,
  orientation = 'vertical',
  invisible,
  ...props
}) => (
  <ScrollAreaPrimitive.Root
    className={twMerge('relative overflow-hidden', className)}
  >
    <ScrollAreaPrimitive.Viewport
      asChild
      {...props}
      className={twMerge('h-full w-full')}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      orientation={orientation}
      className={twMerge(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' &&
          'h-2.5 border-t border-t-transparent p-[1px]'
      )}
    >
      {!invisible && (
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-black/10 dark:bg-white/10" />
      )}
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);
