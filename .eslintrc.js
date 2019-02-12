module.exports = {
  env: { node: true },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
