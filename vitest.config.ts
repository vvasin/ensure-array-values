import {defaultExclude, defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...defaultExclude, 'build'],
    typecheck: {
      enabled: true,
    },
  },
});
