module.exports = {
  parser: 'babel-eslint',

  plugins: ['jsx-a11y', 'react', 'import', 'flowtype'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['app/assets/javascripts/shared/src'],
      },
    },
  },

  extends: ['prettier', 'plugin:flowtype/recommended'],

  rules: {
    'consistent-this': ['error', 'prefer-fat-arrow-over-reassigning-this'],
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'no-const-assign': 'error',
    'no-var': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-const': 'error',
  },
};
