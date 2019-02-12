module.exports = {
  env: { node: true, es6: true },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier', 'prettier/standard'],
  plugins: ['import', 'prettier', 'standard'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
