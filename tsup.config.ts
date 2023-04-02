import { defineConfig } from 'tsup';
import type { Plugin } from 'esbuild';

const insertUseClient: Plugin = {
  name: 'insert-use-client',
  setup(build) {
    build.onLoad({ filter: /\.js$/ }, async (args) => {
      const fs = require('fs');
      let contents = fs.readFileSync(args.path, 'utf8');
      const useClientDirective = `"use client";`;

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

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.stories.tsx'],
  sourcemap: true,
  dts: true,
  format: ['cjs', 'esm'],
  splitting: false,
  esbuildPlugins: [insertUseClient],
});
