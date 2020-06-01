module.exports = {
  extends: ['./rules/best-practices', './rules/typescript'].map(
    require.resolve,
  ),
  parserOptions: {
    project: '../tsconfig.json',
    sourceType: 'module',
  },
}
