module.exports = {
  ignore: ['**/*.d.ts'],
  presets: [
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    ],
    [
      '@babel/preset-env',
      {
        modules: 'cjs',
        targets: {
          node: '10',
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      {
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-class-properties'],
    [
      'module-resolver',
      {
        alias: {
          '@': './build',
          '@app': './build/app',
        },
      },
    ],
  ],
}
