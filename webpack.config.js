const path = require('path')
const enterPath = path.join(__dirname, '/client/src/index.jsx')
module.exports = {
  mode: 'development',
  entry: ["regenerator-runtime/runtime.js", enterPath],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
