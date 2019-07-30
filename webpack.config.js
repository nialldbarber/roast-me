const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const javascript = {
  test: /\.(js)$/,
  use: [
    {
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env'] },
    },
  ],
};

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [autoprefixer({ browsers: 'last 3 versions' })];
    },
  },
};

const styles = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: process.env.NODE_ENV === 'development',
      },
    },
    'css-loader',
    'postcss-loader',
    'sass-loader',
    'autoprefixer',
  ],
};

const devMode = process.env.NODE_ENV !== 'production';

const config = {
  entry: {
    App: './public/javascript/app.js',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [javascript, styles],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
};
// webpack is cranky about some packages using a soon to be deprecated API. shhhhhhh
process.noDeprecation = true;

module.exports = config;
