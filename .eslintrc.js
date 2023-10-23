module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended'
    ],
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{tsx,ts}'],
            rules: {
                'i18next/no-literal-string': 'off',
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            "jsx": true
        }
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks'
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        // 'react/jsx-uses-react': 'off',
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': [1],
        'i18next/no-literal-string': ['error', {markupOnly: true, "ignoreAttribute": ["data-testid"]}],
        "react/prop-types": "off",
        "@typescript-eslint/consistent-type-assertions": 'off',
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": false
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
    }
}