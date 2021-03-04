module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:sonarjs/recommended"
  ],
  plugins: [
    "sonarjs"
  ],
  // add your custom rules here
  rules: {}
}
