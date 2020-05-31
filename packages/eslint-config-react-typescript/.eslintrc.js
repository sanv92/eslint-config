module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  extends: [
    '@sanv/eslint-config-base',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    './configs/index',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/extensions': extensions.js,
    'react': {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: extensions.js,
      },
      typescript: {
        directory: ['./tsconfig.json'],
        alwaysTryTypes: true,
      },
    },
    'import/core-modules': [],
    'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
}
