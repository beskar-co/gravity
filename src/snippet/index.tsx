'use client';

import type { FC } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { Tooltip } from '../tooltip';
import { Highlighter, HighlighterProps } from './highlighter';

export const Snippet: FC<{
  language: HighlighterProps['language'];
  children: string;
  onCopySuccess?: (text: string) => void;
  onCopyError?: (text: string) => void;
}> = ({ language, children, onCopySuccess, onCopyError }) => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      onCopySuccess?.('Copied code to clipboard');
    } catch (error) {
      onCopyError?.('Failed to copy code to clipboard');
    }
  };

  return (
    <div className="relative overflow-hidden rounded border border-neutral-800 bg-black p-4">
      <Highlighter language={language}>{children}</Highlighter>
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
};
