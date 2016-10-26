var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var config = {
  entry: path.join(srcPath, 'app.js'),
  output: {
    path: path.join(distPath),
    filename: 'bundle-[hash:6].js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'raw'
    }, {
      test: /\.(pug|jade)$/,
      loader: 'pug' // inline base64 URLs for <=10kb images, direct URLs for the rest
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file?name=img/[name].[ext]' // inline base64 URLs for <=10kb images, direct URLs for the rest
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'ng-annotate?add=true!babel?presets[]=es2015'
    }, {
      test: /\.json$/,
      exclude: /(node_modules)/,
      loader: 'json'
    }, {
      test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
      loader: 'file?name=fonts/[name].[ext]'
    }]
  },
  plugins: [

    // HtmlWebpackPlugin: Simplifies creation of HTML files to serve your webpack bundles
    // https://www.npmjs.com/package/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      favicon: 'assets/favicon.ico'
    }),

    // ExtractTextPlugin: Extracts css from bundle to serve and cache separately
    // https://github.com/webpack/extract-text-webpack-plugin
    new ExtractTextPlugin('styles.css'),

    // OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count.
    // https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
    new webpack.optimize.OccurenceOrderPlugin(),

    // Deduplication: find duplicate dependencies & prevents duplicate inclusion
    // https://github.com/webpack/docs/wiki/optimization#deduplication
    new webpack.optimize.DedupePlugin(),

    // Dashboarding
    new DashboardPlugin({ port: 3001 })
  ],
  postcss() {
    return [autoprefixer];
  },
  devServer: {
    port: 4000,
    stats: {
      colors: true
    },
    hot: true,
    historyApiFallback: true
  }
};

module.exports = config;
