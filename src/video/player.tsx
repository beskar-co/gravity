'use client';

import dynamic from 'next/dynamic';

const Player = dynamic(
  () =>
    import(
      /* webpackChunkName: 'react-player' */
      'react-player'
    ),
  {
    ssr: false,
  }
);

export default Player;
