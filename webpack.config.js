const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  console.log('[INFO] Production Build: ', isProduction);

  return {
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(JPE?G|jpe?g|gif|png|svg)$/,
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 50
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                webp: {
                  quality: 75
                }
              }
            },
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[hash:base64:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ['css-hot-loader'].concat(
            ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: { sourceMap: true } },
                // { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true,
                    plugins: loader => [require('autoprefixer')({ browsers: ['IE 6', 'Chrome 9', 'Firefox 14'] })]
                  }
                },
                { loader: 'sass-loader', options: { sourceMap: true } }
              ]
            })
          )
        }
      ]
    },
    plugins: [
      new FaviconsWebpackPlugin('./src/assets/images/Logo.png'),
      new ExtractTextPlugin('styles.css'),
      // new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
