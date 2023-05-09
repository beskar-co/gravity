import { Button } from '@/button';
import type { ComponentProps, FC, ReactNode } from 'react';
import { Octokit } from '@octokit/rest';
import Demo from './components/demo';
import clsx from 'clsx';
import { Snippet } from '@/snippet';

const octokit = new Octokit();
const npmLink = 'https://npmjs.com/package/@beskar-labs/gravity';

const formatDate = (date: string | null): string =>
  date
    ? new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(date))
    : '';

const OutboundLink: FC<ComponentProps<'a'>> = (props) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a
    {...props}
    className={clsx(
      'underline transition-colors',
      'text-neutral-900 decoration-neutral-400',
      'hover:text-black hover:decoration-neutral-500',
      'dark:text-neutral-100 dark:decoration-neutral-600',
      'dark:hover:text-white dark:hover:decoration-neutral-500'
    )}
    target="_blank"
    rel="noopener noreferrer"
  />
);

const Home = async (): Promise<ReactNode> => {
  const latestRelease = await octokit.repos.getLatestRelease({
    owner: 'beskar-co',
    repo: 'gravity',
  });

  return (
    <main className="flex h-screen items-center overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 items-center gap-8">
          <div className="col-span-5">
            <div className="hidden sm:mb-8 sm:flex">
              <div className="relative inline-flex gap-2 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-black/10 hover:ring-black/20">
                <span>
                  {latestRelease.data.name} released{' '}
                  {formatDate(latestRelease.data.published_at)}
                </span>
                <a href={npmLink} className="font-semibold text-black">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Download on NPM <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Fast, opinionated design system for Next.js applications
            </h1>
            <p className="mt-6 text-neutral-600">
              Gravity is a design system to power Next.js experiences from{' '}
              <OutboundLink href="https://www.beskar.co/">
                Beskar Labs
              </OutboundLink>
              . Components are primarily built on{' '}
              <OutboundLink href="https://www.radix-ui.com/">
                Radix UI primitives
              </OutboundLink>{' '}
              with styling mostly derived from{' '}
              <OutboundLink href="https://ui.shadcn.com/">
                @shadcn&apos;s UI project
              </OutboundLink>
              . The components have been precomposed in an opinionated manner
              for rapid development and consistent interfaces across Beskar Labs
              projects.
            </p>
            <Snippet className="mt-4" language="bash">
              yarn add @beskar-labs/gravity
            </Snippet>
            <Button variant="link" href="/docs" className="mt-4">
              or browse the components
            </Button>
          </div>
          <div className="col-span-6 col-start-7">
            <Demo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
