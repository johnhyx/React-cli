const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(path.resolve(__dirname, '../dist'))
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    inline: true,
    open: true,
  },

  rules: [
    {
        test: /\.(css|less)$/,
        use: [
            process.env.NODE_ENV == 'development' ? { loader: 'style-loader' } : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            }
        ]
    }
],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),],

}