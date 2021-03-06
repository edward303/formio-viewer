const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/renderer.js',
  output: {
    path: path.resolve(__dirname, 'dist/lib/formiojs'),
    filename: 'formio.form.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  }
};