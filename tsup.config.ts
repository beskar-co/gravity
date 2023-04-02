import { defineConfig } from 'tsup';
import { insertUseClient } from './scripts/insert-use-client';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.stories.tsx'],
  sourcemap: true,
  dts: true,
  format: ['cjs', 'esm'],
  splitting: false,
  esbuildPlugins: [insertUseClient],
});
