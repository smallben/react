var path = require ('path');

var config = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'GooglePlay/include/index.js')],
	output: {
		path: path.resolve(__dirname, 'GooglePlay'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel']
		}]
	}
};

module.exports = config;
