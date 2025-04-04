import { globalIgnores } from 'eslint/config';
import stylisticJs from '@stylistic/eslint-plugin-js';
// todo:
// configure eslint-plugin-react to estlint v 9.23.0
export default [
  globalIgnores([
    '.astro/*',
    'node_modules/*',
    '.husky',
    '.vscode',
    'dist',
    'build',
    'out',
    'coverage',
    'public',
  ]),
  {
    plugins: { '@stylistic/js': stylisticJs },
    rules: {
      'no-unused-vars': 'error',
      '@stylistic/js/quotes': ['error', 'single'],
    },
  },
];
