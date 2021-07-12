const allowedExtensions = ['.mjs', '.js', '.ts']

module.exports = {
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'eslint:recommended',
  ],
  plugins: ['import', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: allowedExtensions,
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',

    'camelcase': 'off',
    'class-methods-use-this': 'off',

    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
      },
    ],

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      allowedExtensions.reduce(
        (obj, extension) =>
          Object.assign(obj, {
            [extension.replace(/^\./, '')]: 'never',
          }),
        {},
      ),
    ],
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      files: ['.ts', '.d.ts'].map(extension => `**/*${extension}`),
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': allowedExtensions.filter(extension =>
            /ts/.test(extension),
          ),
        },
        'import/resolver': {
          node: allowedExtensions,
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',

        'import/extensions': [
          'error',
          'ignorePackages',
          allowedExtensions.reduce(
            (obj, extension) =>
              Object.assign(obj, {
                [extension.replace(/^\./, '')]: 'never',
              }),
            {},
          ),
        ],

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            variables: false,
            functions: false,
            ignoreTypeReferences: true,
          },
        ],
      },
    },
  ],
}
