module.exports = {
  extends: [
    './rules/react',
    './rules/best-practices',
    './rules/typescript',
    './rules/jest',
  ].map(require.resolve),
  parserOptions: {
    project: '../tsconfig.json',
    sourceType: 'module',
  },
}
