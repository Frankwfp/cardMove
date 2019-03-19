var path = require('path');
var webpack = require('webpack')

module.exports = {
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: '/dist/',
  //   filename: 'move_pic.js',
  //   library: 'MovePic',
  //   libraryTarget: 'umd',
  //   umdNamedDefine: true
  // }
  pages: {
    index: {
      entry: './src/index.js',
      template: './public/index.html',
      filename: 'index.html'
    }
  }
}