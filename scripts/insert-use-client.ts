import type { Plugin } from 'esbuild';

export const insertUseClient: Plugin = {
  name: 'insert-use-client',
  setup(build) {
    build.onLoad({ filter: /\.js$/ }, async (args) => {
      const fs = require('fs');
      let contents = fs.readFileSync(args.path, 'utf8');
      const useClientDirective = `'use client';`;

      if (contents.includes(useClientDirective)) {
        contents = contents.replace(useClientDirective, '').trim();
        return {
          contents: useClientDirective + '\n\n' + contents,
          loader: 'default',
        };
      }
    });
  },
};
