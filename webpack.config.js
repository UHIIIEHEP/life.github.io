
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'index.js',
        publicPath: 'dist/'
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new ExtractTextPlugin('style.css')
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader','sass-loader']
                })
            }
        ]
    }
};