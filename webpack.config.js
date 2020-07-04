// mulai 21.15
module.exports = {
	entry: "./index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(jpe?g|mp3|png|gif|svg)$/i,
				loader: "file-loader",
			},
		],
	},
	output: {
		path: `${__dirname}/public`,
		filename: "hbd-gesti.js",
	},
	devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: `${__dirname}/public`,
		port: 3000,
	},
};
