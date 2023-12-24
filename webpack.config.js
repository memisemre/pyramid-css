const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './pyramid.scss',
  output: {
    filename: 'style.css',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
