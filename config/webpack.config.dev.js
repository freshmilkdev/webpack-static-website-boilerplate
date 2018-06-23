const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //context: path.resolve(__dirname, "../"), // `__dirname` is root of project and `src` is source
    entry: path.resolve(__dirname, "../src/js"),
    output: {
        path: path.resolve(__dirname, '../dist'), // `dist` is the destination
        publicPath: "/",
        filename: 'bundle.js',
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i,
                loaders: ['file-loader?&name=assets/[ext]/[name].[hash].[ext]']
            }
        ]
    },
    devServer: {
        open: true, // to open the local server in browser
        contentBase: path.resolve(__dirname, "../src/"),
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack dev html',
            template: path.resolve(__dirname, "../src/index.template.ejs"),
            inject: 'body'
        }),
        // Enable the plugin to let webpack communicate changes
        // to WDS. --hot sets this automatically!
        new webpack.HotModuleReplacementPlugin(),
    ],
};