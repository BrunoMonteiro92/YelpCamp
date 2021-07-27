module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: [
        'ejs-js',
    ],
    rules: {
        camelcase: 'off',
        'class-methods-use-this': 'off',
        'no-shadow': 'off',
        'no-console': 'off',
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        'lines-between-class-members': 'off',
        'no-underscore-dangle': 'off',
        'linebreak-style': 'off',
        indent: ['error', 4],
        'no-plusplus': 'off',
        'no-await-in-loop': 'off',
    },
};
