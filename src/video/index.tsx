'use client';

import clsx from 'clsx';
import type { ComponentPropsWithoutRef, FC } from 'react';
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
>(({ className, style, width, height, ...props }, ref) => (
  <div
    className={clsx(
      'relative w-full overflow-hidden rounded',
      className,
      !className?.includes('aspect-') && 'aspect-video'
    )}
    style={style}
  >
    <Player
      style={{
        position: 'absolute',
        inset: 0,
      }}
      width={width ?? '100%'}
      height={height ?? '100%'}
      ref={ref}
      {...props}
    />
  </div>
));
Video.displayName = 'Video';
