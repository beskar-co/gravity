'use client';

import clsx from 'clsx';
import type { ComponentPropsWithoutRef, FC, HTMLProps } from 'react';
import { Fragment } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import useSticky from '@beskar-labs/use-sticky';
import { usePathname } from 'next/navigation';
import type { ButtonProps } from '../button';
import { Button } from '../button';
import { Popover } from '../popover';

type ModifiedLink = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  href: string;
};

type NavigationDropdownItemProps =
  | {
      layout: 'list' | 'grid';
      className?: string;
      items: ({
        label: string;
        description?: string;
        icon?: typeof ChevronDownIcon;
        href: string;
      } & ModifiedLink)[];
    }
  | {
      layout: 'custom';
      className?: string;
      children: FC;
    };

type NavigationMenuProps = HTMLProps<HTMLDivElement> & {
  logo?: FC;
  items: ({
    label: string;
  } & (NavigationDropdownItemProps | ModifiedLink))[];
  actions?: ButtonProps[];
};

const baseClassName = clsx(
  'inline-flex gap-1 items-center justify-center',
  'rounded-md bg-transparent px-3 py-2 text-sm transition-colors',
  'dark:text-neutral-100',
  'hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
  'disabled:pointer-events-none disabled:opacity-50',
  'focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800'
);

export const NavigationMenuLink: FC<
  NavigationDropdownItemProps['items'][number]
> = ({ icon: Icon, label, description, href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        baseClassName,
        'w-full gap-2',
        href === pathname && 'bg-neutral-50 dark:bg-neutral-800'
      )}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {Icon && (
        <Icon className="mr-1 h-6 w-6 shrink-0 self-start text-neutral-500 dark:text-neutral-400" />
      )}
      <span className="grid w-full gap-1">
        <span className="text-sm font-medium text-black dark:text-white">
          {label}
        </span>
        {description && (
          <span className="line-clamp-2 text-sm leading-snug text-neutral-500 dark:text-neutral-400">
            {description}
          </span>
        )}
      </span>
      {children}
      {href.startsWith('http') && (
        <ArrowUpRightIcon className="h-3 w-3 shrink-0" />
      )}
    </Link>
  );
};

const NavigationItem: FC<{ data: NavigationMenuProps['items'][number] }> = ({
  data,
}) => (
  <Fragment key={data.label}>
    {'href' in data ? (
      <NavigationMenuLink key={data.label} {...data} />
    ) : (
      <Popover
        className={clsx(
          data.layout === 'list' && 'w-[317px]',
          data.layout === 'grid' && 'w-[600px]',
          data.className
        )}
        content={
          <>
            {'items' in data && (
              <div
                className={clsx(
                  data.layout === 'list' && 'grid gap-1',
                  data.layout === 'grid' && 'grid grid-cols-2 gap-1'
                )}
              >
                {data.items.map((item) => (
                  <NavigationMenuLink key={item.label} {...item} />
                ))}
              </div>
            )}
            {'children' in data && <data.children />}
          </>
        }
      >
        <button type="button" className={clsx(baseClassName, 'font-medium')}>
          {data.label}
          <ChevronDownIcon className="h-3 w-3 shrink-0" />
        </button>
      </Popover>
    )}
  </Fragment>
);

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
        'sticky top-0 z-50 border-b px-4 py-3 backdrop-blur-sm transition-colors sm:px-8',
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
        <div className="flex items-center gap-2">
          {actions.map((action, index) => (
            <Button key={index} {...action} />
          ))}
        </div>
      )}
    </nav>
  );
};
