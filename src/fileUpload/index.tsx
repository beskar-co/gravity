import { DocumentArrowUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';
import { useRef } from 'react';
import { useDrop } from 'react-use';
import { getExtension } from 'mime';
import { Label } from '../label';

type FileUploadProps = {
  label?: string;
  value?: File;
  onChange?: (file: File) => void;
  onError?: (error: string) => void;
  accept: string[];
  maxSize?: number;
};

export const FileUpload: FC<FileUploadProps> = ({
  label,
  value,
  onChange,
  onError,
  accept,
  maxSize = 5,
}) => {
  const id = useId();
  const handleChange = (files: File[]) => {
    if (files.length > 1) {
      onError?.('Only one file can be uploaded at a time');
      return;
    }

    const file = files[0];

    if (file.size > maxSize * 1024 * 1024) {
      onError?.(`File size must be less than ${maxSize}MB`);
      return;
    }

    const extension = getExtension(file.type);

    if (!extension) {
      onError?.('File type is not supported');
      return;
    }

    if (!accept.includes(`.${extension}`)) {
      onError?.(`File type must be one of the following: ${accept.join(', ')}`);
      return;
    }

    onChange?.(file);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const state = useDrop({ onFiles: handleChange });

  const handleClickChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const filesArray = Array.from(files);

    handleChange(filesArray);
  };

  return (
    <div className="grid gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}

      <div
        className={clsx(
          'flex justify-center rounded-md border-2 border-dashed px-6 pb-6 pt-5 transition-colors',
          'border-neutral-100 dark:border-neutral-800',
          state.over
            ? 'bg-neutral-100 dark:bg-neutral-900'
            : 'bg-white dark:bg-black'
        )}
      >
        <div className="grid gap-2 text-center">
          <DocumentArrowUpIcon
            className={clsx(
              'mx-auto h-12 w-12',
              'text-neutral-500 dark:text-neutral-400'
            )}
          />
          <div
            className={clsx(
              'flex text-sm',
              'text-neutral-500 dark:text-neutral-400'
            )}
          >
            <label
              htmlFor="file-upload"
              className={clsx(
                'relative cursor-pointer rounded-md font-medium transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2',
                'text-black dark:text-white',
                'focus-within:ring-neutral-100 dark:focus-within:ring-neutral-900',
                state.over
                  ? 'bg-neutral-100 dark:bg-neutral-900'
                  : 'bg-white dark:bg-black'
              )}
            >
              {value ? <span>{value.name}</span> : <span>Upload a file</span>}
              <input
                ref={inputRef}
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept={accept.join(', ')}
                onChange={handleClickChange}
              />
            </label>
            {!value && <p className="pl-1">or drag and drop</p>}
          </div>
          <p
            className={clsx(
              'text-xs',
              'text-neutral-500 dark:text-neutral-400'
            )}
          >
            {new Intl.ListFormat('en-US', {
              style: 'long',
              type: 'conjunction',
            }).format(accept)}
            , up to {maxSize}MB
          </p>
        </div>
      </div>
    </div>
  );
};