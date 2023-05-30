'use client';

import type { ComponentPropsWithoutRef, FC } from 'react';
import { forwardRef } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { Tooltip } from '../tooltip';
import dynamic from 'next/dynamic';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { twMerge } from 'tailwind-merge';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { toast } from '../toast';

type Language =
  | '1c'
  | 'abnf'
  | 'accesslog'
  | 'actionscript'
  | 'ada'
  | 'angelscript'
  | 'apache'
  | 'applescript'
  | 'arcade'
  | 'arduino'
  | 'armasm'
  | 'asciidoc'
  | 'aspectj'
  | 'autohotkey'
  | 'autoit'
  | 'avrasm'
  | 'awk'
  | 'axapta'
  | 'bash'
  | 'basic'
  | 'bnf'
  | 'brainfuck'
  | 'c-like'
  | 'c'
  | 'cal'
  | 'capnproto'
  | 'ceylon'
  | 'clean'
  | 'clojure-repl'
  | 'clojure'
  | 'cmake'
  | 'coffeescript'
  | 'coq'
  | 'cos'
  | 'cpp'
  | 'crmsh'
  | 'crystal'
  | 'cs'
  | 'csharp'
  | 'csp'
  | 'css'
  | 'd'
  | 'dart'
  | 'delphi'
  | 'diff'
  | 'django'
  | 'dns'
  | 'dockerfile'
  | 'dos'
  | 'dsconfig'
  | 'dts'
  | 'dust'
  | 'ebnf'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erlang-repl'
  | 'erlang'
  | 'excel'
  | 'fix'
  | 'flix'
  | 'fortran'
  | 'fsharp'
  | 'gams'
  | 'gauss'
  | 'gcode'
  | 'gherkin'
  | 'glsl'
  | 'gml'
  | 'go'
  | 'golo'
  | 'gradle'
  | 'groovy'
  | 'haml'
  | 'handlebars'
  | 'haskell'
  | 'haxe'
  | 'hsp'
  | 'htmlbars'
  | 'http'
  | 'hy'
  | 'index'
  | 'inform7'
  | 'ini'
  | 'irpf90'
  | 'isbl'
  | 'java'
  | 'javascript'
  | 'jboss-cli'
  | 'json'
  | 'julia-repl'
  | 'julia'
  | 'kotlin'
  | 'lasso'
  | 'latex'
  | 'ldif'
  | 'leaf'
  | 'less'
  | 'lisp'
  | 'livecodeserver'
  | 'livescript'
  | 'llvm'
  | 'lsl'
  | 'lua'
  | 'makefile'
  | 'markdown'
  | 'mathematica'
  | 'matlab'
  | 'maxima'
  | 'mel'
  | 'mercury'
  | 'mipsasm'
  | 'mizar'
  | 'mojolicious'
  | 'monkey'
  | 'moonscript'
  | 'n1ql'
  | 'nginx'
  | 'nim'
  | 'nimrod'
  | 'nix'
  | 'node-repl'
  | 'nsis'
  | 'objectivec'
  | 'ocaml'
  | 'openscad'
  | 'oxygene'
  | 'parser3'
  | 'perl'
  | 'pf'
  | 'pgsql'
  | 'php-template'
  | 'php'
  | 'plaintext'
  | 'pony'
  | 'powershell'
  | 'processing'
  | 'profile'
  | 'prolog'
  | 'properties'
  | 'protobuf'
  | 'puppet'
  | 'purebasic'
  | 'python-repl'
  | 'python'
  | 'q'
  | 'qml'
  | 'r'
  | 'reasonml'
  | 'rib'
  | 'roboconf'
  | 'routeros'
  | 'rsl'
  | 'ruby'
  | 'ruleslanguage'
  | 'rust'
  | 'sas'
  | 'scala'
  | 'scheme'
  | 'scilab'
  | 'scss'
  | 'shell'
  | 'smali'
  | 'smalltalk'
  | 'sml'
  | 'sqf'
  | 'sql'
  | 'sql_more'
  | 'stan'
  | 'stata'
  | 'step21'
  | 'stylus'
  | 'subunit'
  | 'supported-languages'
  | 'swift'
  | 'taggerscript'
  | 'tap'
  | 'tcl'
  | 'tex'
  | 'thrift'
  | 'tp'
  | 'twig'
  | 'typescript'
  | 'vala'
  | 'vbnet'
  | 'vbscript-html'
  | 'vbscript'
  | 'verilog'
  | 'vhdl'
  | 'vim'
  | 'x86asm'
  | 'xl'
  | 'xml'
  | 'xquery'
  | 'yaml'
  | 'zephir';

type SnippetProps = Omit<SyntaxHighlighterProps, 'language' | 'children'> & {
  language: Language;
  children: string;
  onCopySuccess?: (text: string) => void;
  onCopyError?: (text: string) => void;
  showCopy?: boolean;
  className?: string;
};

const Highlighter = dynamic(
  async () =>
    import(
      /* webpackChunkName: "react-syntax-highlighter" */
      'react-syntax-highlighter'
    ).then((mod) => mod.default),
  { ssr: false }
);

export const Snippet: FC<SnippetProps> = forwardRef<
  ComponentPropsWithoutRef<typeof Highlighter>,
  SnippetProps
>(
  (
    {
      language,
      children,
      onCopySuccess = toast.success,
      onCopyError = toast.error,
      className,
      showCopy,
      ...props
    },
    ref
  ) => {
    const handleCopy = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);

        onCopySuccess('Copied code to clipboard');
      } catch (error) {
        onCopyError('Failed to copy code to clipboard');
      }
    };

    const code = children.toString();
    const lines = code.split('\n');

    return (
      <div
        className={twMerge(
          'relative overflow-hidden rounded bg-black p-4',
          className
        )}
      >
        <Highlighter
          language={language}
          style={nord}
          ref={ref}
          customStyle={{
            background: 'transparent',
            padding: 0,
            fontSize: 14,
          }}
          {...props}
        >
          {code}
        </Highlighter>
        {showCopy && (
          <Tooltip content="Copy to clipboard">
            <button
              type="button"
              className={twMerge(
                'absolute rounded bg-neutral-900 p-2 transition-colors hover:bg-neutral-800',
                lines.length > 1 ? 'right-4 top-4' : 'right-2.5 top-2.5'
              )}
              onClick={async () => handleCopy(children)}
            >
              <ClipboardDocumentIcon
                className="h-4 w-4 text-neutral-400"
                width={16}
                height={16}
              />
            </button>
          </Tooltip>
        )}
      </div>
    );
  }
);
Snippet.displayName = 'Snippet';
