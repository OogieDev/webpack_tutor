const path = require('path');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: './index',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: '/\.tsx?$/',
                loader: 'awesome-typescript-loader'
            }
        ]
    }

 };