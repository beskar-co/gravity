'use client';

import clsx from 'clsx';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { useState } from 'react';
import { forwardRef } from 'react';
import type { ReactPlayerProps } from 'react-player';
import dynamic from 'next/dynamic';

const Player = dynamic(
  async () =>
    import(
      /* webpackChunkName: 'player' */
      'react-player/lazy'
    ).then((mod) => mod.default),
  {
    ssr: false,
  }
);

type VideoProps = ReactPlayerProps & {
  className?: string;
};

export const Video: FC<VideoProps> = forwardRef<
  ComponentPropsWithoutRef<typeof Player>,
  VideoProps
>(({ className, style, width, height, onReady, ...props }, ref) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden rounded',
        className,
        !className?.includes('aspect-') && 'aspect-video'
      )}
      style={style}
    >
      <div
        className={clsx(
          'pointer-events-none relative z-10 flex h-full w-full select-none items-center justify-center bg-neutral-100 transition-opacity dark:bg-neutral-900',
          loaded ? 'opacity-0' : 'opacity-100'
        )}
      >
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      <Player
        style={{
          position: 'absolute',
          inset: 0,
        }}
        width={width ?? '100%'}
        height={height ?? '100%'}
        ref={ref}
        onReady={(player) => {
          setLoaded(true);
          onReady?.(player);
        }}
        {...props}
      />
    </div>
  );
});
Video.displayName = 'Video';
