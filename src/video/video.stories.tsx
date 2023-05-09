import type { Meta, StoryObj } from '@storybook/react';
import { Video } from './';

const meta: Meta<typeof Video> = {
  component: Video,
  argTypes: {
    onBuffer: { action: 'buffer' },
    onBufferEnd: { action: 'buffer end' },
    onClickPreview: { action: 'click preview' },
    onDisablePIP: { action: 'disable pip' },
    onDuration: { action: 'duration' },
    onEnablePIP: { action: 'enable pip' },
    onEnded: { action: 'ended' },
    onError: { action: 'error' },
    onPause: { action: 'pause' },
    onPlay: { action: 'play' },
    onProgress: { action: 'progress' },
    onReady: { action: 'ready' },
    onSeek: { action: 'seek' },
    onStart: { action: 'start' },
  },
};
export default meta;

export const Default: StoryObj<typeof Video> = {
  args: {
    url: 'https://vimeo.com/794348644',
  },
};

export const CustomAspectRatio: StoryObj<typeof Video> = {
  args: {
    url: 'https://vimeo.com/794348644',
    className: 'aspect-[2744/1822]',
  },
};

export const WithControls: StoryObj<typeof Video> = {
  args: {
    url: 'https://vimeo.com/794348644',
    controls: true,
  },
};
