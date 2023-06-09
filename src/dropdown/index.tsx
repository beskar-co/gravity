'use client';

import type { ElementRef, ComponentPropsWithoutRef, FC } from 'react';
import { Fragment, forwardRef } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import type { PlusIcon } from '@heroicons/react/20/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

type DropdownItemProps = {
  label?: string;
  icon?: typeof PlusIcon;
  shortcut?: string;
  disabled?: boolean;
} & (
  | {
      onClick?: () => void;
    }
  | (ComponentPropsWithoutRef<typeof Link> & {
      href?: string;
    })
);

export type DropdownProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Root
> & {
  className?: string;
  items: {
    label?: string;
    items?: (DropdownItemProps & {
      items?: DropdownItemProps[];
    })[];
  }[];
};

const DropdownItem: FC<{ item: DropdownItemProps }> = ({ item }) => {
  const className = twMerge(
    'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none',
    'focus:bg-neutral-100 dark:focus:bg-neutral-800',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
  );
  const Inner = (
    <>
      {item.icon && (
        <div className="mr-2 h-4 w-4">
          <item.icon />
        </div>
      )}
      {item.label}
      {item.shortcut && (
        <span className="ml-auto text-xs tracking-widest text-neutral-500">
          {item.shortcut}
        </span>
      )}
    </>
  );

  if ('href' in item) {
    return (
      <DropdownMenuPrimitive.Item
        className={className}
        key={item.label}
        data-disabled={item.disabled}
        asChild
      >
        <Link
          {...item}
          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          target={item.href.startsWith('http') ? '_blank' : undefined}
        >
          {Inner}
        </Link>
      </DropdownMenuPrimitive.Item>
    );
  }

  return (
    <DropdownMenuPrimitive.Item
      className={className}
      key={item.label}
      data-disabled={item.disabled}
      // eslint-disable-next-line react/jsx-handler-names
      onClick={item.onClick}
    >
      {Inner}
    </DropdownMenuPrimitive.Item>
  );
};

export const Dropdown: FC<DropdownProps> = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Root>,
  DropdownProps
>(({ className, children, items, ...props }, ref) => (
  <DropdownMenuPrimitive.Root {...props}>
    <DropdownMenuPrimitive.Trigger asChild className="cursor-pointer">
      {children}
    </DropdownMenuPrimitive.Trigger>
    <DropdownMenuPrimitive.Content
      collisionPadding={16}
      ref={ref}
      className={twMerge(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md animate-in slide-in-from-left-1',
        'border-neutral-100 bg-white text-neutral-700',
        'dark:border-neutral-900 dark:bg-neutral-900 dark:text-neutral-400',
        className
      )}
    >
      {items.map((item, index) => (
        <Fragment key={index}>
          <DropdownMenuPrimitive.Group>
            {item.label && (
              <DropdownMenuPrimitive.Label className="px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-300">
                {item.label}
              </DropdownMenuPrimitive.Label>
            )}
            {item.items?.map((subItem) =>
              subItem.items ? (
                <DropdownMenuPrimitive.Sub key={subItem.label}>
                  <DropdownMenuPrimitive.SubTrigger
                    className={twMerge(
                      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none',
                      'focus:bg-neutral-100 dark:focus:bg-neutral-800',
                      'data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800'
                    )}
                  >
                    {subItem.icon && (
                      <div className="mr-2 h-4 w-4">
                        <subItem.icon />
                      </div>
                    )}
                    {subItem.label}
                    <ChevronRightIcon className="ml-auto h-4 w-4" />
                  </DropdownMenuPrimitive.SubTrigger>
                  <DropdownMenuPrimitive.Portal>
                    <DropdownMenuPrimitive.SubContent
                      className={twMerge(
                        'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md animate-in slide-in-from-left-1',
                        'border-neutral-100 bg-white text-neutral-700',
                        'dark:border-neutral-900 dark:bg-neutral-900 dark:text-neutral-400'
                      )}
                    >
                      {subItem.items.map((subSubItem) => (
                        <DropdownItem
                          item={subSubItem}
                          key={subSubItem.label}
                        />
                      ))}
                    </DropdownMenuPrimitive.SubContent>
                  </DropdownMenuPrimitive.Portal>
                </DropdownMenuPrimitive.Sub>
              ) : (
                <DropdownItem item={subItem} key={subItem.label} />
              )
            )}
          </DropdownMenuPrimitive.Group>
          {index !== items.length - 1 && (
            <DropdownMenuPrimitive.Separator className="-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800" />
          )}
        </Fragment>
      ))}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Root>
));
Dropdown.displayName = 'Dropdown';
