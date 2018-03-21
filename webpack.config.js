const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  console.log('[INFO] Production Build: ', isProduction);
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(jpe?g|gif|png|svg)$/,
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
                name: "[path][name].[ext]",

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
          use: CSSExtract.extract({
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader', options: { sourceMap: true } }
            ]
          })
        }
      ]
    },
    plugins: [
      new FaviconsWebpackPlugin('./src/assets/images/Logo.png'),
      CSSExtract,
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
