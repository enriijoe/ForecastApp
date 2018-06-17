import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: path.resolve("src/forecast/application/main"),
  },
  resolve: {
    modules: [path.resolve("src/forecast"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    publicPath: "/",
    path: path.resolve("target/"),
    filename: 'js/[name].build.js'
  },
  module: {
    rules: [{
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /(node_modules)/,
        loader: 'awesome-typescript-loader',
        query: {
          configFileName: path.resolve("src/forecast/tsconfig.json")
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve("src/forecast/assets/html/index.html")
    })
  ],
  devServer: {
    historyApiFallback: {
      index: '/'
    }
  }
};