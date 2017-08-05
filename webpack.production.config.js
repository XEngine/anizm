const webpack = require('webpack')
const path = require('path')
const resolve = path.resolve

const config = {
    entry: [
        './src/root.js'
    ],
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'public'),
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
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'BABEL_ENV' : JSON.stringify('production'),
                '__DEVTOOLS__' : false,
                'API_URL': JSON.stringify('//api.anizm.tv/'),
                'JWT': JSON.stringify({
                    client_id: 2,
                    client_secret: "Pp4MowKT1UemtAQqv7vhNHA4Xm0CWrdwfqBjo01S",
                }),
                'CDN' : JSON.stringify('//api.anizm.tv')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: true, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        })
    ]
}

module.exports = config