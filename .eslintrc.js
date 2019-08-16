module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "eqeqeq": ["error", "always"],
        "react/jsx-fragments": 0,
        "complexity": ["error", 10],
        "max-len": ["error", { "code": 80, "comments": 65, "ignoreUrls": true }],
        "indent": ["error", 2],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'no-noninteractive-element-to-interactive-role': 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
        "import/no-named-as-default-member": 0,
        "import/no-named-as-default": 0,
    }
};
