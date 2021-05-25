// const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

var config = {
	mode: "production", // "development" || "none"
	context: __dirname,
	entry: {
		index: "./src/_js/index.js",
		planner: "./src/_js/planner.js",
		dashboard: "./src/_js/dashboard.js",
		// style: "./src/_css/style.css",
	},
	// output: {
	// 	// filename: '[name].bundle.js',
	// 	path: path.resolve(__dirname, '/Public/dist'),
	// },
	// entry: [__dirname + "/src/index.js", __dirname + "/src/_css/style.css"],
	output: {
		path: __dirname + "/Public/dist",
		publicPath: "/",
	},
	plugins: [new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							// Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
							// If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
							importLoaders: 1,
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				use: [
					{
						loader: "url-loader",
					},
				],
				include: path.join(__dirname, "/src/_css/images"),
			},
		],
	},
	// clea
}

module.exports = (env, argv) => {
	if (argv.mode === "development") {
		// config.devtool = "inlinesource-map"
	}

	if (argv.mode === "production") {
		//...
	}

	return config
}
