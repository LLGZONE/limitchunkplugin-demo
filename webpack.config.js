const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'node',
  entry: { a: './a.js', b: './b.js' },
  output: {
    path: path.resolve(__dirname, './build'),
    chunkFilename: 'chunk.js'
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
}