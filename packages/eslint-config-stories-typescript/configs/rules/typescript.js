const {
  rules: baseErrorsAirbnbRules,
} = require('eslint-config-airbnb-base/rules/errors')

const {
  rules: baseBestPracticesAirbnbRules,
} = require('eslint-config-airbnb-base/rules/best-practices')

const {
  rules: baseBestPracticesRules,
} = require('@sanv/eslint-config-base/configs/rules/best-practices')

const {
  rules: baseVariablesAirbnbRules,
} = require('eslint-config-airbnb-base/rules/variables')

const {
  rules: baseVariablesRules,
} = require('eslint-config-airbnb-base/rules/variables')

const {
  rules: baseES6AirbnbRules,
} = require('eslint-config-airbnb-base/rules/es6')

const {
  rules: baseStyleAirbnbRules,
} = require('eslint-config-airbnb-base/rules/style')

const {
  rules: baseStyleRules,
} = require('@sanv/eslint-config-base/configs/rules/style')

const extensions = require('../../constants/extensions')

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '../../tsconfig.json',
    sourceType: 'module',
  },
  settings: {
    'import/extensions': extensions.ts,
    'react': {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': extensions.ts,
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: extensions.ts,
      },
      typescript: {
        directory: ['../../tsconfig.json'],
        alwaysTryTypes: true,
      },
    },
    'import/core-modules': [],
    'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
  rules: {
    // Replace Airbnb 'brace-style' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': baseStyleAirbnbRules['brace-style'],

    // Replace Airbnb 'camelcase' rule with '@typescript-eslint' version
    // https://github.com/typescrinaming-conventionpt-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    'camelcase': 'off',
    '@typescript-eslint/camelcase': 'off',

    // Replace Airbnb 'comma-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': baseStyleAirbnbRules['comma-spacing'],

    // Replace Airbnb 'comma-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last':
      baseBestPracticesAirbnbRules['default-param-last'],

    // Replace Airbnb 'comma-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation':
      baseBestPracticesAirbnbRules['dot-notation'],

    // Replace Airbnb 'func-call-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing':
      baseStyleAirbnbRules['func-call-spacing'],

    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    'indent': 'off',
    '@typescript-eslint/indent': baseStyleAirbnbRules.indent,

    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations':
      baseVariablesAirbnbRules['init-declarations'],

    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing':
      baseStyleAirbnbRules['keyword-spacing'],

    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members':
      baseStyleAirbnbRules['lines-between-class-members'],

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor':
      baseStyleAirbnbRules['no-array-constructor'],

    // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members':
      baseES6AirbnbRules['no-dupe-class-members'],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function':
      baseBestPracticesAirbnbRules['no-empty-function'],

    // Replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens':
      baseErrorsAirbnbRules['no-extra-parens'],

    // Replace Airbnb 'no-extra-semi' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': baseErrorsAirbnbRules['no-extra-semi'],

    // Replace Airbnb 'no-implied-eval' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval':
      baseBestPracticesAirbnbRules['no-implied-eval'],

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this':
      baseBestPracticesAirbnbRules['no-invalid-this'],

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers':
      baseBestPracticesRules['no-magic-numbers'],

    // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal':
      baseBestPracticesAirbnbRules['no-throw-literal'],

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      baseBestPracticesAirbnbRules['no-unused-expressions'],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define':
      baseVariablesAirbnbRules['no-use-before-define'],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
      baseES6AirbnbRules['no-useless-constructor'],

    // Replace Airbnb 'quotes' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    'quotes': 'off',
    '@typescript-eslint/quotes': baseStyleRules.quotes,

    'require-await': 'off',
    '@typescript-eslint/require-await':
      baseBestPracticesAirbnbRules['require-await'],

    // Replace Airbnb 'semi' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    'semi': 'off',
    '@typescript-eslint/semi': baseStyleRules.semi,

    // Replace Airbnb 'space-before-function-paren' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren':
      baseStyleAirbnbRules['space-before-function-paren'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Disable `no-undef` rule within TypeScript files because it incorrectly errors when exporting default interfaces
        // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/50
        // This will be caught by TypeScript compiler if `strictNullChecks` (or `strict`) is enabled
        'no-undef': 'off',

        /* Using TypeScript makes it safe enough to disable the checks below */

        // Disable ESLint-based module resolution check for improved monorepo support
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',
      },
    },
  ],
}
