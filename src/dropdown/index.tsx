'use client';

import type { ElementRef, ComponentPropsWithoutRef, FC } from 'react';
import { forwardRef } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/20/solid';
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

const DropdownMenuItem: FC<{ item: DropdownItemProps }> = ({ item }) => {
  const className = clsx(
    'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none',
    'focus:bg-neutral-100 dark:focus:bg-neutral-700',
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
        <Link {...item}>{Inner}</Link>
      </DropdownMenuPrimitive.Item>
    );
  }

  return (
    <DropdownMenuPrimitive.Item
      className={className}
      key={item.label}
      data-disabled={item.disabled}
      onClick={item.onClick}
    >
      {Inner}
    </DropdownMenuPrimitive.Item>
  );
};

const DropdownMenu = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Root>,
  DropdownProps
>(({ className, children, items, ...props }, ref) => (
  <DropdownMenuPrimitive.Root {...props}>
    <DropdownMenuPrimitive.Trigger asChild className="cursor-pointer">
      {children}
    </DropdownMenuPrimitive.Trigger>
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={clsx(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md animate-in slide-in-from-left-1 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400',
        className
      )}
    >
      {items.map((item, index) => (
        <>
          <DropdownMenuPrimitive.Group key={index}>
            {item.label && (
              <DropdownMenuPrimitive.Label className="px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-300">
                {item.label}
              </DropdownMenuPrimitive.Label>
            )}
            {item.items?.map((subItem) =>
              subItem.items ? (
                <DropdownMenuPrimitive.Sub>
                  <DropdownMenuPrimitive.SubTrigger className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700">
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
                      className={clsx(
                        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md animate-in slide-in-from-left-1 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400'
                      )}
                    >
                      {subItem.items.map((subSubItem) => (
                        <DropdownMenuItem item={subSubItem} />
                      ))}
                    </DropdownMenuPrimitive.SubContent>
                  </DropdownMenuPrimitive.Portal>
                </DropdownMenuPrimitive.Sub>
              ) : (
                <DropdownMenuItem item={subItem} />
              )
            )}
          </DropdownMenuPrimitive.Group>
          {index !== items.length - 1 && (
            <DropdownMenuPrimitive.Separator className="-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700" />
          )}
        </>
      ))}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Root>
));

export { DropdownMenu };
