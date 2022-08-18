const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // dev mode, not production
  entry: path.join(__dirname, 'src/index.js'), // specifying our entry or root file
  output: { // output options
    filename: 'unmini.js', // what / where the file will be named
    path: path.resolve(__dirname, 'dist'), // where the dist folder will be made
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // definint ghe directory that we are outputting to
    },
    compress: true,
    port: 6969,
    hot: true,
    watchFiles: ['./src/index.html']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'i love webpack', // title in the html file we're going to generate
      filename: 'index.html', // filename of the generated html file
      template: path.join(__dirname, 'src/index.html'), // template html to build from
      inject: 'body' // will inject the javascript into the body instead of the head
    })
  ],
};