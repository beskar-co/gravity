import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/stories/**/*.tsx', '!src/**/*.stories.tsx'],
  sourcemap: true,
  dts: true,
  format: ['cjs'],
  splitting: false,
});
