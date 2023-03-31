import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.tsx', '!src/**/*.stories.tsx'],
  sourcemap: false,
  minify: true,
  dts: true,
  format: ['cjs'],
  clean: true,
});
