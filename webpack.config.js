const webpack = require('webpack')
const path = require('path')
const resolve = path.resolve

const config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/root.js'
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {test: /\.(png|jpg)$/, use: 'file-loader?name=img/[name].[ext]'},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader'},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader?name=font/[name].[ext]'
            },
            {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml'},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'API_URL': JSON.stringify('http://localhost:3000/serv/api'),
                'JWT': JSON.stringify({
                    client_id: 2,
                    client_secret: "Pp4MowKT1UemtAQqv7vhNHA4Xm0CWrdwfqBjo01S",
                }),
                'CDN' : JSON.stringify('//localhost:3000/serv')
            }
        })
    ],
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/',
        disableHostCheck: true,
        historyApiFallback: true,
        proxy: {
            '/serv': {
                target: "http://anizmapi.dev",
                changeOrigin: true,
                pathRewrite: {
                    '^/serv': ''
                }
            }
        }
    },
}

module.exports = config