module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:nuxt/recommended",
		"plugin:sonarjs/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	plugins: ["sonarjs", "prettier"],
	// add your custom rules here
	rules: {}
}
