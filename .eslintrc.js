module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
    node: true,
  },

  plugins: ['prettier'],

  extends: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 120,
      },
    ],
    complexity: ['warn', 8],
    eqeqeq: ['error', 'allow-null'],
    'max-statements': 'off',
    'max-lines': ['error', 250],
    'no-shadow-restricted-names': 'error',
    'no-warning-comments': ['error', { terms: ['todo', 'fixme'] }],
    'no-undef': 'off',
    radix: 'error',
    strict: 'off',
  },
};
