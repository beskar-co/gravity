'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import type { ComponentPropsWithoutRef, ElementRef, FC } from 'react';
import { forwardRef } from 'react';

type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

const Slider: FC<SliderProps> = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={twMerge(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
      <SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-neutral-400" />
    </SliderPrimitive.Track>
    {props.value?.map((value) => (
      <SliderPrimitive.Thumb
        className="block h-5 w-5 rounded-full border-2 border-neutral-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-100 dark:bg-neutral-400 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900"
        key={value}
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
