// const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const StyleLintPlugin = require("stylelint-webpack-plugin")
const path = require("path")

var config = {
	mode: "production", // "development" || "none"
	context: __dirname,
	entry: {
		index: "./src/_js/index.js",
		planner: "./src/_js/planner.js",
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
	plugins: [
		new StyleLintPlugin({
			configFile: ".stylelintrc", // if your config is in a non-standard place
			files: "src/**/*.css", // location of your CSS files
			fix: true, // if you want to auto-fix some of the basic rules
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: [/node_modules/],
				use: ["babel-loader", "eslint-loader"],
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
}

module.exports = (env, argv) => {
	if (argv.mode === "development") {
		config.devtool = "inlinesource-map"
	}

	if (argv.mode === "production") {
		//...
	}

	return config
}
