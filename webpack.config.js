const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx|vue)$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['stage-2']
            }
        },
        {
        test: /\.(vue|css)$/,
      loader: 'less-loader' // compiles Less to CSS
    }]
  }
};