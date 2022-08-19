const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');

const path = require('path');
const is_prod = process.env.NODE_ENV === 'production';

const predefinedPlugins = [ // this is our plugins array
  new HtmlWebpackPlugin({
    title: 'i love webpack', // title in the html file we're going to generate
    filename: 'index.html', // filename of the generated html file
    template: path.join(__dirname, 'src/index.html'), // template html to build from
    inject: 'body' // will inject the javascript into the body instead of the head
  }),
  new MiniCssExtractPlugin({
    filename: is_prod ? 'chic.[contenthash].css' : 'chic.css' // if its on production, create a css stylesheet with hash, otherwise, just make a stylesheet
  })
];

if (is_prod) predefinedPlugins.push(...[ // this spread operator will push the values from the array, not the entire array itself
  new GenerateSW(),
  new WebpackPwaManifest({
    name: 'my fingers hurt',
    short_name: 'WPEx',
    description: 'this is the best pwa',
    background_color: '#F78DA7',
    start_url: './',
    publicPath: './',
    inject: true,
    // crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/assets/choccy-mikl.jpg'),
        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        ios: true
      },
      // {
      //   src: path.resolve('src/assets/large-icon.png'),
      //   size: '1024x1024' // you can also use the specifications pattern
      // },
      // {
      //   src: path.resolve('src/assets/maskable-icon.png'),
      //   size: '1024x1024',
      //   purpose: 'maskable'
      // }
    ]
  })
]); // if the plugin is production, then we'll add the annoying service worker

module.exports = {
  mode: is_prod ? 'production' : 'development', // dev mode, not production
  entry: {
    unmini: path.join(__dirname, 'src/index.js')
  }, // specifying our entry or root file
  output: { // output options
    filename: '[name].[contenthash].js', // what / where the file will be named (by passing in [name] it's grabbing from entry; by passing in [contenthash] it will generate a randomhash for us)
    path: path.resolve(__dirname, 'dist'), // where the dist folder will be made
    clean: true, // this will clean up any previous build js files
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // definint ghe directory that we are outputting to
    },
    compress: true, // compressing our data somehow?
    port: 4242, // defining the port we use - default is 8080
    hot: true, // update changes live
    watchFiles: ['./src/index.html'], // adding index.html to the hotplate
    proxy: {
      '/': 'http://localhost:6969' // telling our fetches to be passed back to port 6969
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] // this is pulling in the minicss plugin to generate our css
      },
      {
        test: /\.js$/, // specifying what file's we're looking for
        exclude: /node_modules/, // don't go into node_modules
        use: {
          loader: 'babel-loader', // use the babel-loader 
          options: {
            presets: ['@babel/preset-env'] // standard babel config back to es5 or sum
          }
        }
      }
    ]
  },
  plugins: predefinedPlugins, // pulled out our plugins array to clean it up a little
};