'use client';

import type { FC } from 'react';
import type { ReactPlayerProps } from 'react-player';
import ReactPlayer from 'react-player';

const Player: FC<ReactPlayerProps> = (props) => <ReactPlayer {...props} />;

export default Player;
