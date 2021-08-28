const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development', // production or development
  devtool: 'inline-source-map',
  entry: {
    background: './src/background.js',
    content: './src/content.js',
    index: './src/popup/index.js',
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    assetModuleFilename: 'images/[name][ext]',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          context: 'src',
          from: '**/*.json',
          to: DIST_DIR,
        },
        {
          context: 'src/popup',
          from: '*.html',
          to: DIST_DIR,
        },
        {
          context: 'src',
          from: 'images/',
          to: path.resolve(DIST_DIR, 'images'),
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.json'
    ]
  },
  target: ['web', 'es5'],
};