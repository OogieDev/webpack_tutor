const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        index:'./index'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:  ['css-loader', 'less-loader']
                })
            }
        ]
    },

    plugins: [
        new extractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]


 };