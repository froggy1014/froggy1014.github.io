module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["airbnb", "prettier"],
  plugins: ["react-hooks", "header"],
  ignorePatterns: [
    "build",
    "docs/api",
    "node_modules",
    "docs/_static",
    "static",
    "eslint.config.js",
    "tailwind.config.js",
    "plugins"
  ],
  rules: {
    "import/no-unresolved": [
      2,
      {
        ignore: ["^@theme", "^@docusaurus", "^@generated"],
      },
    ],
    "import/extensions": 0,
    "react/jsx-filename-extension": 0,
    "react-hooks/rules-of-hooks": 2,
    "react/prop-types": 0,
    "react/function-component-definition": [
      1,
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
