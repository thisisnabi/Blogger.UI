module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    "plugin:@typescript-eslint/recommended",
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: {react: {version: '18.2'}},
  plugins: ["@typescript-eslint", "simple-import-sort", "import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "block"
      },
      {
        "blankLine": "always",
        "prev": "block",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "block-like"
      },
      {
        "blankLine": "always",
        "prev": "block-like",
        "next": "*"
      }
    ]
  }


}
