'use client';

import { ElementRef, forwardRef } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { Tooltip } from '../tooltip';
import dynamic from 'next/dynamic';
import { HighlighterProps } from './highlighter';

type SnippetProps = {
  language: HighlighterProps['language'];
  children: string;
  onCopySuccess?: (text: string) => void;
  onCopyError?: (text: string) => void;
};

const Highlighter = dynamic(
  async () =>
    import(
      /* webpackChunkName: "react-syntax-highlighter" */
      './highlighter'
    ),
  { ssr: false }
);

export const Snippet = forwardRef<ElementRef<'div'>, SnippetProps>(
  ({ language, children, onCopySuccess, onCopyError }, ref) => {
    const handleCopy = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);

        onCopySuccess?.('Copied code to clipboard');
      } catch (error) {
        onCopyError?.('Failed to copy code to clipboard');
      }
    };

    return (
      <div
        className="relative overflow-hidden rounded border border-neutral-800 bg-black p-4"
        ref={ref}
      >
        <Highlighter
          language={language}
          customStyle={{
            background: 'transparent',
            padding: 0,
            fontSize: 14,
          }}
        >
          {children}
        </Highlighter>
        <Tooltip content="Copy to clipboard">
          <button
            type="button"
            className="absolute right-4 top-4 rounded bg-neutral-900 p-2 transition-colors hover:bg-neutral-800"
            onClick={async () => handleCopy(children)}
          >
            <ClipboardDocumentIcon
              className="h-4 w-4 text-neutral-400"
              width={16}
              height={16}
            />
          </button>
        </Tooltip>
      </div>
    );
  }
);
