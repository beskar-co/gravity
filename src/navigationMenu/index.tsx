import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import type { ComponentPropsWithoutRef, ElementRef, FC } from 'react';
import { forwardRef } from 'react';
import Link from 'next/link';

type NavigationDropdownItemProps = {
  layout: 'list' | 'grid';
  items: ({
    label: string;
    description?: string;
  } & ComponentPropsWithoutRef<typeof Link>)[];
  feature?: FC;
};

type NavigationLinkItemProps = ComponentPropsWithoutRef<typeof Link>;

type NavigationMenuProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> & {
  items: ({
    label: string;
  } & (NavigationDropdownItemProps | NavigationLinkItemProps))[];
};

export const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ className, children, items, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={clsx(
      'relative z-10 flex flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    <NavigationMenuPrimitive.List className="group flex flex-1 list-none items-center justify-center">
      {items.map((item) => (
        <NavigationMenuPrimitive.Item key={item.label}>
          {'href' in item ? (
            <NavigationMenuPrimitive.Link
              href={item.href as string}
              asChild
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-50 data-[state=open]:bg-neutral-50 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:bg-neutral-800 dark:data-[active]:bg-neutral-800 dark:data-[state=open]:bg-neutral-800"
            >
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuPrimitive.Link>
          ) : (
            <>
              <NavigationMenuPrimitive.Trigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-50 data-[state=open]:bg-neutral-50 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:bg-neutral-800 dark:data-[active]:bg-neutral-800 dark:data-[state=open]:bg-neutral-800">
                {item.label}
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuPrimitive.Trigger>
              <NavigationMenuPrimitive.Content className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                <ul
                  className={clsx(
                    'grid gap-3',
                    item.layout === 'list' &&
                      'w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]',
                    item.layout === 'grid' &&
                      'p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
                  )}
                >
                  {item.feature && (
                    <li className="row-span-3">
                      <item.feature />
                    </li>
                  )}
                  {item.items?.map((subItem) => (
                    <NavigationMenuPrimitive.Item>
                      <NavigationMenuPrimitive.Link
                        href={subItem.href as string}
                        asChild
                      >
                        <Link
                          href={subItem.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        >
                          <div className="text-sm font-medium leading-none">
                            {subItem.label}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-neutral-500 dark:text-neutral-400">
                            {subItem.description}
                          </p>
                        </Link>
                      </NavigationMenuPrimitive.Link>
                    </NavigationMenuPrimitive.Item>
                  ))}
                </ul>
              </NavigationMenuPrimitive.Content>
            </>
          )}
        </NavigationMenuPrimitive.Item>
      ))}
      {children}

      {/* <NavigationMenuPrimitive.Indicator className="top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in">
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800" />
      </NavigationMenuPrimitive.Indicator> */}
    </NavigationMenuPrimitive.List>
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 dark:border-neutral-700 dark:bg-neutral-800 md:w-[var(--radix-navigation-menu-viewport-width)]" />
    </div>
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
