const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const mode = isProd ? 'production' : 'development';
const devtool = isProd ? false : 'inline-source-map';
const devServer = isProd ? {} : {
  hot: true,
  contentBase: './public',
  watchContentBase: true,
  publicPath: '/',
  historyApiFallback: {
    disableDotRule: true
  }
};
const plugins = [new HtmlWebpackPlugin({
  inject: true,
  template: './public/index.html',
})];
const entry = ['./src/index.js'];

if (!isProd) {
  entry.unshift(require.resolve('react-dev-utils/webpackHotDevClient'));
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

const CSSLoader = (modules) => ({
  loader: 'css-loader',
  options: {
    sourceMap: !isProd,
    modules,
    importLoaders: 1,
    modules: modules ? {
      localIdentName: '[name]__[local]___[hash:base64:5]'
    } : undefined
  },
});

const LessLoader = {
  loader: 'less-loader',
  options: {
    sourceMap: !isProd
  }
};

const StyleLoader = { loader: 'style-loader' };

module.exports = () => ({
  entry,
  output: {
    pathinfo: !isProd,
    filename: 'static/js/bundle.js',
    futureEmitAssets: true,
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => path.relative('.', info.absoluteResourcePath).replace(/\\/g, '/'),
    jsonpFunction: 'jsonpMcJsonpFace',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: [
          StyleLoader,
          CSSLoader(false),
          LessLoader,
        ]
      },
      {
        test: /\.module\.less$/,
        use: [
          StyleLoader,
          CSSLoader(true),
          LessLoader
        ]
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          StyleLoader,
          CSSLoader(false)
        ]
      },
      {
        test: /\.module\.css$/,
        use: [
          StyleLoader,
          CSSLoader(true)
        ]
      },
      { test: /\.m?jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs']
  },
  plugins,
  mode,
  devtool,
  devServer,
});
