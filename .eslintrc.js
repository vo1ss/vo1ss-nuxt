module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    "eslint:recommended",
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'nuxt'
  ],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': {
      void: 'always'
    },
    'vue/no-v-html': 'off',
    'no-console': 'off',
    'arrow-parens': ["error", "as-needed"]
  }
}
