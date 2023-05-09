import { Button } from '@/button';
import type { FC, ReactElement } from 'react';
import { Octokit } from '@octokit/rest';

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

const Hero = async (): Promise<ReactElement> => {
  const latestRelease = await octokit.repos.getLatestRelease({
    owner: 'beskar-co',
    repo: 'gravity',
  });

  return (
    <section id="hero" className="py-24">
      <div className="container mx-auto px-4">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
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
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Fast, opinionated design system for Next.js applications
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Gravity is a design system to power Next.js experiences from{' '}
            <a
              href="https://www.beskar.co/"
              target="_blank"
              rel="noopener  
             noreferrer"
            >
              Beskar Labs
            </a>
            . Components are primarily built on{' '}
            <a
              href="https://www.radix-ui.com/"
              target="_blank"
              rel="noopener  
             noreferrer"
            >
              Radix UI primitives
            </a>{' '}
            with styling mostly derived from{' '}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener  
             noreferrer"
            >
              @shadcn&apos;s UI project
            </a>
            . The components have been precomposed for rapid development and
            consistent interfaces. The goal of Gravity is to provide a
            consistent set of opinionated components that can be implemented
            quickly and predictably across various projects made by Beskar Labs,
            however you&apos;re welcome to use it in your own projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href={npmLink}>View on NPM</Button>
            <Button variant="secondary" href="http://localhost:58841">
              Browse components
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: FC = () => (
  <main>
    <Hero />
  </main>
);

export default Home;
