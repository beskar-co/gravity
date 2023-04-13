import NextImage from 'next/image';
import type { ImageProps } from 'next/image';
import type { ElementRef } from 'react';
import { forwardRef } from 'react';

export const Image = forwardRef<ElementRef<typeof NextImage>, ImageProps>(
  ({ quality = 100, ...props }, ref) => (
    <NextImage {...props} quality={quality} ref={ref} />
  )
);
Image.displayName = 'Image';
