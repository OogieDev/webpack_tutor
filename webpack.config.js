const path = require('path');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './index',
        styles: './styles.css'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader']
                use: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },

    plugins: [
        new extractTextWebpackPlugin('[name].css')
    ]


 };