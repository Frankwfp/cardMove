module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'move_pic.js',
      library: 'MovePic',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
}