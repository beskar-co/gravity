'use client';

import { DayPicker } from 'react-day-picker';
import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { FC } from 'react';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar: FC<CalendarProps> = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={clsx('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: clsx(
          'flex items-center justify-center rounded',
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-neutral-400 dark:text-neutral-600 rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: clsx(
          'flex items-center justify-center rounded',
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
        ),
        day_selected:
          'bg-neutral-100 text-black hover:bg-neutral-100 hover:text-black focus:bg-neutral-100 focus:text-black',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-neutral-400 dark:text-neutral-600 opacity-50',
        day_disabled: 'text-neutral-400 dark:text-neutral-600 opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
      }}
      {...props}
    />
  );
};
