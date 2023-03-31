import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.tsx', '!src/**/*.stories.tsx'],
  sourcemap: true,
  dts: true,
  format: ['esm'],
  clean: true,
  splitting: false,
});
