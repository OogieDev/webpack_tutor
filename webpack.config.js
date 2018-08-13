const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './init',
        vendor: ['jquery']
    },


    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$'
            }
        ]
    }

};