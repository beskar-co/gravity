'use client';

import { FC } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

export const Player: FC<ReactPlayerProps> = (props) => (
  <ReactPlayer {...props} />
);

export default Player;
