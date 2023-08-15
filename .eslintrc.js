const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'ramda',
    'simple-import-sort',
    'react-hooks',
    'prettier',
    'unused-imports',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-debugger': 2,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'newline-before-return': 1,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    complexity: [2, { max: 15 }], // prevent from writing too complex functions
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsForRegex: ['Ref$'] },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-newline': [1, { prevent: true }],
    'import/order': 0, // turned of as we're using simple-import-sort for sorting
    'sort-imports': 0, // turned of as we're using simple-import-sort for sorting
    'simple-import-sort/sort': [
      2,
      {
        groups: [
          ['^\\u0000'], // side effect imports.
          ['^react', '^@?\\w'], // packages from node_modules. `react` related packages come first.
          [
            '^(ui|components|config|views|hooks|routes|services|store|utils|translations|api|pages|models)',
          ], // absolute imports.
          ['^\\.'], // relative imports. Anything that starts with a dot.
        ],
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: 'import', next: 'export' },
    ],
    'no-multiple-empty-lines': ['error', { maxEOF: 0, max: 1 }],
  },
  settings: {
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: {
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
    {
      files: ['**/index.ts'],
      rules: {
        'padding-line-between-statements': [
          'warn',
          { blankLine: 'never', prev: 'export', next: 'export' },
          { blankLine: 'always', prev: 'import', next: 'export' },
        ],
      },
    },
  ],
};
