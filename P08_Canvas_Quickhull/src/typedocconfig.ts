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
  name: 'Quickhull Animation',
  ignoreCompilerErrors: true,
  plugin: 'none',
  listInvalidSymbolLinks: true,
};