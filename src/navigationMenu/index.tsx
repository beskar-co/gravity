'use client';

import clsx from 'clsx';
import type { ComponentPropsWithoutRef, FC, HTMLProps } from 'react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import useSticky from '@beskar-labs/use-sticky';
import { usePathname } from 'next/navigation';
import type { ButtonProps } from '../button';
import { Button } from '../button';

type ModifiedLink = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  href: string;
};

type NavigationDropdownItemProps = {
  layout: 'list' | 'grid';
  items: ({
    label: string;
    description?: string;
    icon?: typeof ChevronDownIcon;
    href: string;
  } & ModifiedLink)[];
  feature?: FC;
};

type NavigationMenuProps = HTMLProps<HTMLDivElement> & {
  logo?: FC;
  items: ({
    label: string;
  } & (NavigationDropdownItemProps | ModifiedLink))[];
  actions?: ButtonProps[];
};

const NavigationItem: FC<{ data: NavigationMenuProps['items'][number] }> = ({
  data,
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const baseClassName = clsx(
    'inline-flex w-max gap-1 items-center justify-center',
    'rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors',
    'dark:text-neutral-100',
    'hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800'
  );

  return (
    <div key={data.label}>
      {'items' in data ? (
        <button
          type="button"
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          <div
            className={clsx(
              baseClassName,
              open && 'bg-neutral-50 dark:bg-neutral-800'
            )}
          >
            {data.label}
            <ChevronDownIcon className="relative h-3 w-3" />
          </div>
          {open && (
            <div className="absolute z-10">
              {data.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={clsx(
                    baseClassName,
                    item.href === pathname &&
                      'bg-neutral-50 dark:bg-neutral-800'
                  )}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {item.label}
                  {item.href.startsWith('http') && (
                    <ArrowUpRightIcon className="relative h-3 w-3" />
                  )}
                </Link>
              ))}
            </div>
          )}
        </button>
      ) : (
        <Link
          href={data.href}
          className={clsx(
            baseClassName,
            data.href === pathname && 'bg-neutral-50 dark:bg-neutral-800'
          )}
          target={data.href.startsWith('http') ? '_blank' : undefined}
          rel={data.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {data.label}
          {data.href.startsWith('http') && (
            <ArrowUpRightIcon className="relative h-3 w-3" />
          )}
        </Link>
      )}
    </div>
  );
};

export const NavigationMenu: FC<NavigationMenuProps> = ({
  className,
  logo: Logo,
  items,
  actions,
  ...props
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const sticky = useSticky(navRef);

  return (
    <nav
      className={clsx(
        'flex items-center justify-between gap-4',
        'sticky top-0 z-50 flex items-center justify-between border-b px-4 py-3 backdrop-blur-sm transition-colors sm:px-8',
        'bg-white/95 dark:bg-black/95',
        sticky
          ? 'border-neutral-200 dark:border-neutral-900'
          : 'border-transparent',
        className
      )}
      ref={navRef}
      {...props}
    >
      <div className="flex items-center gap-4">
        {Logo && <Logo />}
        <div className="flex items-center gap-1">
          {items.map((item) => (
            <NavigationItem key={item.label} data={item} />
          ))}
        </div>
      </div>
      {actions?.length && (
        <div className="flex items-center gap-1">
          {actions.map((action, index) => (
            <Button key={index} {...action} />
          ))}
        </div>
      )}
    </nav>
  );
};
