module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      react: true,
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    mocha: true,
    "jsx-control-statements/jsx-control-statements": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-control-statements/recommended"],
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: ["jsx-control-statements"],
  "ecmaFeatures": {
    "jsx": true
  },
  rules: {
    "react/display-name": "off",
    "react/jsx-no-undef": [2, { "allowGlobals": true }],
    "react/prop-types": "off"
  }
};
