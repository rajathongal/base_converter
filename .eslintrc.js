module.exports = {
    env: {
        node: true,
        jest: true
    },
    parser: "@typescrippt-eslint/parser",
    parserOptions: {
        sourceType: "module"
    },
    extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
    rules: {}
}