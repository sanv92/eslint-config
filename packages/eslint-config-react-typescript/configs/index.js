module.exports = {
  extends: ['./rules/typescript', './rules/react'].map(require.resolve),
}
