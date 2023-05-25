import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './';
import { useState } from 'react';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
};
export default meta;

export const Default: StoryObj<typeof Calendar> = {
  args: {},
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());

    return <Calendar selected={selected} onSelect={setSelected} />;
  },
};
