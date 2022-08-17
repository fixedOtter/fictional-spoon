const path = require('path');

module.exports = {
  mode: 'development', // dev mode, not production
  entry: path.join(__dirname, 'src/index.js'), // specifying our entry or root file
  output: { // output options
    filename: 'unmini.js', // what / where the file will be named
    path: path.resolve(__dirname, 'dist'), // where the dist folder will be made
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};