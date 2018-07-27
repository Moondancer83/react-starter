const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const projectName = require('./package.json').name; // TODO change this for production usage

module.exports = {
    entry: ["./src/index.jsx", "babel-polyfill"],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?sourceMap", "sass-loader?sourceMap"]
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?sourceMap"
                })
            },
            {
                test: /\.(eot|woff|woff2|otf|ttf|png|jpg)$/,
                loader: "file-loader?name=images/[name].[ext]"
            },
            {
                test: /\.svg$/,
                loader: ['desvg-loader/react', 'svg-loader']
            },
            {
                test: /\.js|\.jsx$/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, "src"),
                use: {
                    loader: 'babel-loader?sourceMap',
                    query: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            'title': projectName,
            'template': './src/index.html',
            'favicon': './assets/react.ico'
        }),
        new CopyWebpackPlugin([
            { from: './assets', to: './' }
        ])
    ],
    devServer: {
        port: 3000,
        open: true,
        contentBase: [path.join(__dirname, 'src'), path.join(__dirname, './assets')]
    }
};
