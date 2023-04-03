'use client';

import clsx from 'clsx';
import { ElementRef, forwardRef } from 'react';
import { ReactPlayerProps } from 'react-player';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () =>
    import(
      /* webpackChunkName: 'react-player' */
      './player'
    ),
  {
    ssr: false,
  }
);

type VideoProps = ReactPlayerProps & {
  className?: string;
};

export const Video = forwardRef<ElementRef<'div'>, VideoProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={clsx(
        'relative w-full overflow-hidden rounded',
        className,
        !className?.includes('aspect-') && 'aspect-video'
      )}
      ref={ref}
    >
      <Player
        style={{
          position: 'absolute',
          inset: 0,
        }}
        width="100%"
        height="100%"
        {...props}
      />
    </div>
  )
);
