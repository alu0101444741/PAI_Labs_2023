module.exports = {
    src: [
      './src/index.ts',
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './tutorial-output',
    excludeExternals: true,
    readme: 'README.md',
    name: 'my-cool-project',
    ignoreCompilerErrors: true,
    plugin: 'none',
    listInvalidSymbolLinks: true,
  };