const extensions = require('../../constants/extensions')

module.exports = {
  plugins: ['unicorn'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: extensions.jsAndTs,
      },
    },
    'import/extensions': extensions.jsAndTs,
    'import/core-modules': [],
    'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
}
