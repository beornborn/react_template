const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'parser': 'babel-eslint',
  'plugins': ['react', 'flowtype'],
  'extends': ['airbnb', 'plugin:flowtype/recommended'],
  'settings': {
    'import/resolver': 'webpack'
  },
  'rules': {
    'linebreak-style': [ERROR, 'unix'],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'quotes': [ERROR, 'single'],
    'quote-props': [ERROR, 'as-needed'],
    'semi': OFF,
    'no-unused-vars': [ERROR, { 'vars': 'all', 'args': 'after-used', 'argsIgnorePattern': '^_' }],
    'comma-spacing': OFF,
    'comma-dangle': OFF,
    'object-curly-spacing': OFF,
    'arrow-parens': OFF,
    'new-cap': OFF,
    'spaced-comment': OFF,
    'no-confusing-arrow': OFF,
    'object-property-newline': OFF,
    'no-console': OFF,
    'camelcase': OFF,
    'prefer-template': OFF,
    'max-len': OFF,
    'no-mixed-operators': OFF,
    'no-param-reassign': OFF,
    'no-multiple-empty-lines': OFF,
    'no-prototype-builtins': OFF,
    'no-unused-expressions': OFF,
    'no-underscore-dangle': OFF,
    'class-methods-use-this': OFF,
    'arrow-body-style': OFF,
    'no-else-return': OFF,
    'import/no-named-as-default': OFF,
    'import/extensions': OFF,
    'import/prefer-default-export': OFF,
    'react/prefer-stateless-function': OFF,
    'react/forbid-prop-types': OFF,
    'react/no-unused-prop-types': OFF,
    'react/jsx-space-before-closing': OFF,
    'react/jsx-first-prop-new-line': OFF,
    'react/jsx-boolean-value': OFF,
    'react/sort-comp': OFF,
    'react/jsx-closing-bracket-location': OFF,
    'react/jsx-wrap-multilines': OFF,
    'react/jsx-closing-tag-location': OFF,
    'react/jsx-filename-extension': [ERROR, { 'extensions': ['.js'] }],
    'jsx-a11y/no-static-element-interactions': OFF
  }
}


