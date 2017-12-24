const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = {
  entry: {
    main: './index.js',
    styles: './src/scss/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3030,
    quiet: false,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          // 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },

    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true
    }),
    // new WebpackChunkHash({ algorithm: 'md5' }) // 'md5' is default value 
  ]
};