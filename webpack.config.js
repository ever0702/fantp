var webpack = require('webpack');
var path = require('path');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

// var publicPath = 'http://localhost:3000/';
var publicPath = '/';

module.exports = {
    // entry: ['./js/index', hotMiddlewareScript],
    entry: [
        // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'webpack-hot-middleware/client?reload=true',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './js/bootstrap'
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: publicPath
    },
    'devtool': 'cheap-module-eval-source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            // exclude: /(node_modules|bower_components)/,
            loaders: ['style', 'css'],
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        alias: {
            'redux-devtools/lib': path.join(__dirname, '..', '..', 'src'),
            'redux-devtools': path.join(__dirname, '..', '..', 'src'),
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js', '.json', '.jsx', 'css', 'scss']
    },
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules')
    }
}
