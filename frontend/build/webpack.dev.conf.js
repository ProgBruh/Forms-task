const { merge } = require('webpack-merge');
const baseWebpackConf = require('./webpack.base.conf');

module.exports = merge(baseWebpackConf, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: `${baseWebpackConf.externals.paths.dist}/html`,
    port: 8080,
    hot: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
