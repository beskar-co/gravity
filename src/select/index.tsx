'use client';

import type { ElementRef, ComponentPropsWithoutRef, FC } from 'react';
import { useState } from 'react';
import { Fragment, forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Label } from '../label';
import Image from 'next/image';
import { Badge } from '../badge';
import { Input } from '../input';
import { twMerge } from 'tailwind-merge';

type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  className?: string;
  placeholder?: string;
  label?: string;
  search?: boolean;
  data: {
    label: string;
    items: {
      value: string;
      label: string;
      disabled?: boolean;
      icon?: typeof CheckIcon;
      image?: string;
      badge?: string;
    }[];
  }[];
};

export const Select: FC<SelectProps> = forwardRef<
  ElementRef<typeof SelectPrimitive.Root>,
  SelectProps
>(({ placeholder, data, label, search, className, ...props }, ref) => {
  const [query, setQuery] = useState('');
  const queryData = data.filter((group) =>
    group.items.some((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && <Label>{label}</Label>}
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          ref={ref}
          className={twMerge(
            'flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            'placeholder:text-neutral-500',
            'border-neutral-300 text-black focus:ring-neutral-400',
            'dark:border-neutral-700 dark:text-white dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900',
            className
          )}
          {...props}
        >
          <div className="w-full truncate">
            <SelectPrimitive.Value placeholder={placeholder} />
          </div>
          <ChevronDownIcon className="h-4 w-4 shrink-0 opacity-50" />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className={twMerge(
              'relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md animate-in fade-in-80',
              'border-neutral-100 bg-white text-neutral-700',
              'dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400'
            )}
          >
            <SelectPrimitive.Viewport className="p-1">
              {search && (
                <div
                  className={twMerge(
                    'border-b pl-8',
                    'border-neutral-200',
                    'dark:border-neutral-700'
                  )}
                >
                  <Input
                    placeholder="Search..."
                    className="rounded-bl-none rounded-br-none border-0"
                    value={query}
                    onValueChange={setQuery}
                  />
                </div>
              )}
              {queryData.map((group, index) => (
                <Fragment key={group.label}>
                  <SelectPrimitive.Group>
                    {queryData.length > 1 && (
                      <SelectPrimitive.Label
                        className={twMerge(
                          'py-1.5 pl-8 pr-2 text-sm font-semibold',
                          'text-black',
                          'dark:text-white'
                        )}
                      >
                        {group.label}
                      </SelectPrimitive.Label>
                    )}
                    {group.items.map((item) => (
                      <SelectPrimitive.Item
                        value={item.value}
                        key={item.value}
                        disabled={item.disabled}
                        className={twMerge(
                          'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                          'focus:bg-neutral-100',
                          'dark:focus:bg-neutral-800'
                        )}
                      >
                        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                          <SelectPrimitive.ItemIndicator>
                            <CheckIcon className="h-4 w-4" />
                          </SelectPrimitive.ItemIndicator>
                        </span>

                        <SelectPrimitive.ItemText>
                          <span className="flex items-center gap-2">
                            {item.icon && <item.icon className="h-4 w-4" />}
                            {item.image && (
                              <Image
                                src={item.image}
                                width={16}
                                height={16}
                                alt=""
                                unoptimized
                              />
                            )}
                            <span>{item.label}</span>
                            {item.badge && (
                              <Badge size="sm" variant="secondary">
                                {item.badge}
                              </Badge>
                            )}
                          </span>
                        </SelectPrimitive.ItemText>
                      </SelectPrimitive.Item>
                    ))}
                  </SelectPrimitive.Group>
                  {data.length > 1 && index < data.length - 1 && (
                    <SelectPrimitive.Separator
                      className={twMerge(
                        '-mx-1 my-1 h-px',
                        'bg-neutral-100',
                        'dark:bg-neutral-700'
                      )}
                    />
                  )}
                </Fragment>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  );
});

Select.displayName = SelectPrimitive.Trigger.displayName;
