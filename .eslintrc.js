module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  env: {
    mocha: true,
    es6: true,
    jest: true,
  },
  plugins: ["prettier", "react"],
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-props-no-spreading": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "prefer-template": "off",
    "for-direction": "off",
    "getter-return": "off",
    "arrow-body-style": 0,
    "linebreak-style": 0,
    "no-underscore-dangle": 0,
    "no-tabs": 0,
    "import/prefer-default-export": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
      },
    ],
  },
  ignorePatterns: ["public/*"],
  settings: {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          "~": "./src/frontend",
        },
        extensions: [".js", ".jsx", ".json"],
      },
    },
  },
  globals: {
    React: "writable",
    window: "writable",
    document: "writable",
    fetch: "writable",
    APP_CONFIG: true,
    APP_CONSTANTS: true,
  },
};
