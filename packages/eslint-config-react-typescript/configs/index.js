module.exports = {
  extends: [
    './rules/imports',
    './rules/react',
    './rules/best-practices',
    './rules/react-hooks',
    './rules/typescript',
  ].map(require.resolve),
  parserOptions: {
    project: '../tsconfig.json',
    sourceType: 'module',
  },
}
