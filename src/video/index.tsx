'use client';

import clsx from 'clsx';
import type { ElementRef } from 'react';
import { forwardRef } from 'react';
import type { ReactPlayerProps } from 'react-player';
import dynamic from 'next/dynamic';

const Player = dynamic(
  async () =>
    import(
      /* webpackChunkName: 'player' */
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
  ({ className, ...props }, ref) => (
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
Video.displayName = 'Video';
