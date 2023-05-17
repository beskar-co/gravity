'use client';

import clsx from 'clsx';
import type { ComponentPropsWithoutRef, FC, HTMLProps } from 'react';
import { useRef, Fragment } from 'react';
import Link from 'next/link';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import useSticky from '@beskar-labs/use-sticky';
import { usePathname } from 'next/navigation';
import type { ButtonProps } from '../button';
import { Button } from '../button';
import { Popover } from '../popover';

type ModifiedLink = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  href: string;
};

type NavigationDropdownWithItemsProps = {
  layout: 'list' | 'grid';
  className?: string;
  items: ({
    label: string;
    description?: string;
    icon?: typeof ChevronDownIcon;
    href: string;
  } & ModifiedLink)[];
};

type NavigationItemWithLinkProps = {
  layout: 'custom';
  className?: string;
  children: FC;
};

type NavigationDropdownItemProps =
  | NavigationDropdownWithItemsProps
  | NavigationItemWithLinkProps;

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

const iconClassName = 'h-3 w-3 shrink-0 text-neutral-500';

export const NavigationMenuLink: FC<
  NavigationDropdownWithItemsProps['items'][number]
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
        <Icon className="mr-1 h-6 w-6 shrink-0 self-start text-neutral-500" />
      )}
      <span className="grid w-full gap-1">
        <span className="text-sm font-medium text-black dark:text-white">
          {label}
        </span>
        {description && (
          <span className="line-clamp-2 text-sm leading-snug text-neutral-500">
            {description}
          </span>
        )}
      </span>
      {children}
      {href.startsWith('http') && (
        <ArrowUpRightIcon className={iconClassName} />
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
            {'layout' in data && 'children' in data && <data.children />}
          </>
        }
      >
        <button type="button" className={clsx(baseClassName, 'font-medium')}>
          {data.label}
          <ChevronDownIcon className={iconClassName} />
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
      {Logo && (
        <div className="shrink-0">
          <Logo />
        </div>
      )}
      <div className="sm:hidden">
        <Popover
          content={
            <div className="grid w-full gap-4">
              {items.map((item) => (
                <Fragment key={item.label}>
                  {'href' in item && <NavigationMenuLink {...item} />}
                  {'layout' in item && 'items' in item && (
                    <div className="grid gap-1">
                      <p className="text-sm font-medium text-neutral-500">
                        {item.label}
                      </p>
                      {item.items.map(NavigationMenuLink)}
                    </div>
                  )}
                  {'layout' in item && 'children' in item && <item.children />}
                </Fragment>
              ))}
              {actions?.length && (
                <>
                  <hr className="border-neutral-200 py-1 dark:border-neutral-900" />
                  <div className="grid gap-2">
                    {actions.map((action, index) => (
                      <Button size="sm" key={index} {...action} />
                    ))}
                  </div>
                </>
              )}
            </div>
          }
          className="mt-2 h-[calc(100vh-49px)] w-screen overflow-auto rounded-none"
        >
          <Bars3Icon className="h-6 w-6 cursor-pointer text-neutral-500" />
        </Popover>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <div className="flex items-center gap-1">
          {items.map((item) => (
            <NavigationItem key={item.label} data={item} />
          ))}
        </div>
        {actions?.length && (
          <div className="flex items-center gap-2">
            {actions.map((action, index) => (
              <Button key={index} {...action} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
