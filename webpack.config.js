const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  console.log('[INFO] Production Build: ', isProduction);

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(JPE?G|jpe?g|gif|png|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]'
            }
          }
        },
        {
          test: /\.(otf|eot|woff|woff2|ttf|svg)(\?\S*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 25000,
                name: '[path][name].[ext]'
              }
            }
          ]
        },
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ['css-hot-loader'].concat(
            ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
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
        // {
        //   test: /\.s?css$/,
        //   use: CSSExtract.extract({
        //     use: [{ loader: 'css-loader' }, { loader: 'sass-loader', options: { sourceMap: true } }]
        //   })
        // }
      ]
    },
    plugins: [
      new FaviconsWebpackPlugin('./src/assets/images/Logo.png'),
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devtool: 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
