'use client';

import clsx from 'clsx';
import { FC } from 'react';
import { ReactPlayerProps } from 'react-player';
import Player from './player';

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
);
