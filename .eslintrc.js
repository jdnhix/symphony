module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/recommended',
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        "array-bracket-newline": ["error", "always"],

        "padding-line-between-statements": [
            "error",
            { "blankLine": 'always', "prev": "cjs-import", "next": '*' },
            // { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
            // { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
            // { "blankLine": LINEBREAK_TYPE, "prev": STATEMENT_TYPE, "next": STATEMENT_TYPE },
        ],

        'vue/component-name-in-template-casing': ["error", "PascalCase"],

        "indent": ["error", 'tab'],

        "vue/html-indent": ["error", "tab", {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],

        "vue/script-indent": ["error", "tab", {
            "baseIndent": 0,
            "switchCase": 0,
            "ignores": []
        }]

    },
    "overrides": [
        {
            "files": ["*.vue"],
            "rules": {
                "indent": "off"
            }
        }
    ]
}