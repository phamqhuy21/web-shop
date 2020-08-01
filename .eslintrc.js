module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier",
    ],
    rules: {
        "react/prop-types": 1,
        "react/jsx-max-props-per-line": 1,
        "linebreak-style": 0,
        indent: 0,
        "object-curly-newline": 0,
        "react/jsx-indent": 0,
        "import/prefer-default-export": 0,
        "react/jsx-filename-extension": 0,
        "react/forbid-prop-types": 0,
        "no-use-before-define": 0,
        "react/prefer-stateless-function": 0,
        "class-methods-use-this": 0,
        "react/require-default-props": 0,
        "react/prop-types": 0,
        "react/jsx-props-no-spreading": 0,
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
    plugins: ["prettier"],
    env: {
        es6: true,
        browser: true,
        node: true,
    },
};
