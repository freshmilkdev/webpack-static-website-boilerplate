const webpack = require('webpack');
const path = require('path');
//TODO: path for images in CSS
module.exports = {
    //context: path.resolve(__dirname, "../"), // `__dirname` is root of project and `src` is source
    entry: path.resolve(__dirname, "../src"),
    output: {
        path: path.resolve(__dirname, '../dist'), // `dist` is the destination
        publicPath: "/assets/",
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
            }
        ]
    },
    devServer: {
        open: true, // to open the local server in browser
        contentBase: path.resolve(__dirname, "../src/"),
        hot: true
    },
    plugins: [
        // Enable the plugin to let webpack communicate changes
        // to WDS. --hot sets this automatically!
        new webpack.HotModuleReplacementPlugin(),
    ],
};