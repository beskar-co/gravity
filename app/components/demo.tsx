'use client';

import type { ComponentPropsWithoutRef, FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Badge } from '@/badge';
import { Checkbox } from '@/checkbox';
import { Dialog, DialogAction, DialogCancel } from '@/dialog';
import type { DropdownProps } from '@/dropdown';
import { Dropdown } from '@/dropdown';
import { FileUpload } from '@/fileUpload';
import { HoverCard } from '@/hoverCard';
import { Input } from '@/input';
import { Popover } from '@/popover';
import { Progress } from '@/progress';
import { Select } from '@/select';
import { Slider } from '@/slider';
import { Switch } from '@/switch';
import { toast } from '@/toast';
import { Button } from '@/button';
import { Tooltip } from '@/tooltip';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { Video } from '@/video';
import {
  ArrowLeftOnRectangleIcon,
  BoltIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterIcon,
  CloudIcon,
  CodeBracketIcon,
  CogIcon,
  CreditCardIcon,
  EnvelopeIcon,
  LifebuoyIcon,
  PlusCircleIcon,
  PlusIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import { Avatar } from '@/avatar';

const dropdownItems: DropdownProps['items'] = [
  {
    label: 'My Account',
  },
  {
    items: [
      {
        icon: UserIcon,
        label: 'Profile',
        shortcut: '⇧⌘P',
      },
      {
        icon: CreditCardIcon,
        label: 'Billing',
        shortcut: '⌘B',
      },
      {
        icon: CogIcon,
        label: 'Settings',
        shortcut: '⌘S',
      },
      {
        icon: BoltIcon,
        label: 'Keyboard shortcuts',
        shortcut: '⌘K',
      },
    ],
  },
  {
    items: [
      {
        icon: UsersIcon,
        label: 'Team',
      },
      {
        icon: UserPlusIcon,
        label: 'Invite users',
        items: [
          {
            icon: EnvelopeIcon,
            label: 'Email',
          },
          {
            icon: ChatBubbleBottomCenterIcon,
            label: 'Message',
          },
          {
            icon: PlusCircleIcon,
            label: 'More...',
          },
        ],
      },
      {
        icon: PlusIcon,
        label: 'New Team',
        shortcut: '⌘+T',
      },
    ],
  },
  {
    items: [
      {
        icon: CodeBracketIcon,
        label: 'GitHub',
      },
      {
        icon: LifebuoyIcon,
        label: 'Support',
      },
      {
        icon: CloudIcon,
        label: 'API',
        disabled: true,
      },
    ],
  },
  {
    items: [
      {
        icon: ArrowLeftOnRectangleIcon,
        label: 'Log out',
        shortcut: '⇧⌘Q',
      },
    ],
  },
];

const DialogContent: ComponentPropsWithoutRef<typeof Dialog>['content'] = (
  <div className="grid gap-4">
    <Input label="Name" id="name" value="Pedro Duarte" className="col-span-3" />
    <Input
      label="Username"
      id="username"
      value="@peduarte"
      className="col-span-3"
    />
    <div className="flex items-center gap-2">
      <DialogCancel>Cancel</DialogCancel>
      <DialogAction>Save</DialogAction>
    </div>
  </div>
);

const HoverCardContent: ComponentPropsWithoutRef<typeof HoverCard>['content'] =
  (
    <div className="flex justify-between space-x-4">
      <Avatar src="https://github.com/vercel.png" fallback="VC" />
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
          <span className="text-muted-foreground text-xs">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  );

const PopoverContent: ComponentPropsWithoutRef<typeof Popover>['content'] = (
  <div className="grid gap-4">
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Dimensions</h4>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Set the dimensions for the layer.
      </p>
    </div>
    <div className="grid gap-2">
      <Input
        label="Width"
        id="width"
        defaultValue="100%"
        className="col-span-2 h-8"
      />
      <Input
        label="Max. width"
        id="maxWidth"
        defaultValue="300px"
        className="col-span-2 h-8"
      />
      <Input
        label="Height"
        id="height"
        defaultValue="25px"
        className="col-span-2 h-8"
      />
      <Input
        label="Max. height"
        id="maxHeight"
        defaultValue="none"
        className="col-span-2 h-8"
      />
    </div>
  </div>
);

const Demo: FC = () => {
  const [sliderValue, setSliderValue] = useState([25, 75]);
  const [progressValue, setProgressValue] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue(Math.floor(Math.random() * 100));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen flex-wrap gap-4">
      <div className="w-full">
        <FileUpload accept={['image/*']} />
      </div>
      <div className="flex w-full items-center gap-4">
        <Checkbox label="I'm a checkbox" />
        <Dialog
          content={DialogContent}
          title="User Settings"
          description="Update your profile"
        >
          <Button>Open dialog</Button>
        </Dialog>
        <Dropdown items={dropdownItems}>
          <Button>Open dropdown</Button>
        </Dropdown>
        <HoverCard content={HoverCardContent} className="w-80">
          <Button variant="link">Open hover card</Button>
        </HoverCard>
      </div>
      <div className="flex w-full items-center gap-4">
        <div className="shrink-0">
          <Badge>I&apos;m a badge</Badge>
        </div>
        <Input placeholder="I'm an input" />
        <Popover content={PopoverContent} className="w-80">
          <Button variant="primary">Open popover</Button>
        </Popover>
        <Tooltip content="Hello there">
          <div className="inline-block rounded-full border border-neutral-200 bg-neutral-50 p-2 hover:bg-neutral-100">
            <ChatBubbleLeftIcon className="h-6 w-6 text-neutral-500" />
          </div>
        </Tooltip>
      </div>
      <div className="flex w-full items-center gap-4">
        <Progress value={progressValue} />
        <Select data={[]} />
      </div>
      <div className="flex w-full items-center gap-4">
        <Slider value={sliderValue} onValueChange={setSliderValue} />
        <div className="shrink-0">
          <Switch label="Switch me" />
        </div>
        <Button
          variant="secondary"
          onClick={() => toast.success('Hello there')}
        >
          Make a toast
        </Button>
      </div>
      <Video url="https://www.youtube.com/watch?v=Uo3cL4nrGOk" controls />
    </div>
  );
};

export default Demo;
