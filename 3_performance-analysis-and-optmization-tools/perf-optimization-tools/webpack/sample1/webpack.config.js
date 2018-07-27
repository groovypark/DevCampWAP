var path = require('path'); //node path

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
    // dist 경로 밑에 main.js 만듬
  }
};