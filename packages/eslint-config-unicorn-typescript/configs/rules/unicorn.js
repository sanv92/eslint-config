const extensions = require('../../constants/extensions')

module.exports = {
  plugins: ['unicorn'],
  settings: {
    'import/extensions': extensions.ts,
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: extensions.ts,
      },
    },
    'import/core-modules': [],
    'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
}
