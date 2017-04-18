const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader'
					]
				})
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        use: [
          'babel-loader'
        ]
      }
    ],
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin('styles.css')]
}
