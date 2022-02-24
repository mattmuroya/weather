const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main-[contenthash].js',
    assetModuleFilename: './img/[name][ext]',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  devServer: {
    static: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      favicon: './src/img/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // check for any css
        use: [
          // Extracts CSS from the JS into separate files
          MiniCssExtractPlugin.loader,
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