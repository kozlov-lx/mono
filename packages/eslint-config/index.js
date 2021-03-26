'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb-typescript',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.{stories,story}.{ts,tsx,js,jsx}']}],
    'import/prefer-default-export': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
  },
}
