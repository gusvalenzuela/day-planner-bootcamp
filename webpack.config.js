// const webpack = require('webpack');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const StyleLintPlugin = require("stylelint-webpack-plugin")
const path = require("path")

module.exports = {
	mode: "production", // "development" || "none"
	devtool: "inline-sourcemap",
	context: __dirname,
	entry: {
		planner: './src/index.js',
		style: './src/_css/style.css',
		// contact: './contact.js'
	},
	output: {
		// filename: '[name].bundle.js',
		path: path.resolve(__dirname, '/Public/dist'),
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [
		new StyleLintPlugin({
			configFile: ".stylelintrc", // if your config is in a non-standard place
			files: "src/**/*.css", // location of your CSS files
			fix: true, // if you want to auto-fix some of the basic rules
		}),
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
