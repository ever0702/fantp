var webpack = require('webpack');
var path = require('path');
var publicPath = '/';

console.log('CURRENT NODE_ENV: ', process.env.NODE_ENV);

var config = {
	entry: [
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
	'devtool': 'source-map',
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
			loaders: ['style', 'css']
		}, {
			test: /\.(jpe?g|png|svg)$/i,
			// test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
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

if (process.env.NODE_ENV == 'production') {
	config.devtool = undefined;
	config.plugins = config.plugins.concat([
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	]);
}

module.exports = config;
