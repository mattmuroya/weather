const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    assetModuleFilename: './[name][ext]',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      favicon: './src/img/favicon.ico',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // check for any css
        use: [
          // Extracts CSS from the JS into the html's style tag
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // postcss
          'postcss-loader',
        ],
      },
      {
        test: /\.ico$/i,
        type: 'asset/resource',
      },
    ],
  },
};