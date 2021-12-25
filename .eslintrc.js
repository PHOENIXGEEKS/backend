module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-console': 'error',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
  },
};
