module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'i18next'
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': [1],
        'i18next/no-literal-string': 2,
        "react/prop-types": "off",
    }
}
