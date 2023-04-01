'use client';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { ReactPlayerProps } from 'react-player';

const ReactPlayer = dynamic(
  async () =>
    import(
      /* webpackChunkName: 'react-player' */
      'react-player'
    ),
  {
    ssr: false,
  }
);

type VideoProps = ReactPlayerProps & {
  className?: string;
};

export const Video: FC<VideoProps> = ({ className, ...props }) => (
  <div
    className={clsx(
      'relative w-full overflow-hidden rounded',
      className,
      !className?.includes('aspect-') && 'aspect-video'
    )}
  >
    <ReactPlayer
      style={{
        position: 'absolute',
        inset: 0,
      }}
      width="100%"
      height="100%"
      {...props}
    />
  </div>
);
