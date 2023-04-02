import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.stories.tsx'],
  sourcemap: true,
  dts: true,
  format: ['cjs', 'esm'],
  splitting: false,
});
