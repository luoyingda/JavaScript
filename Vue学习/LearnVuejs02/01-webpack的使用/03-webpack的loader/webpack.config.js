const path = require('path')

module.exports = {
  mode: "development",
  // 入口：可以是字符串/数组/对象，这里我们入口只有一个，所以写一个字符串即可
  entry: './src/main.js',
  // 出口：通常是一个对象，里面至少包含两个重要属性， path 和 filename
  output: {
    path: path.resolve(__dirname, 'dist'),// 注意： path通常是一个绝对路径
    filename: 'bundle.js',
    // publicPath: 'dist/img/bg1.3588a93b.jpeg'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", 'less-loader',],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}