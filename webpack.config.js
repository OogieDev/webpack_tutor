const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './init.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlPlugin({
            title: 'Webpack dev server'
        })
    ]


};