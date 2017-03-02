/**
 * webpack
 */
module.exports = {
  entry  : {
    search: './src/search.js',
    sort  : './src/sort.js',
  },
  output : {
    path    : './dist',
    filename: '[name].js'
  },
  module : {
    rules: [
      {
        test   : /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel-loader'
      }
    ]
  },
  devtool: "source-map",
  target : "node"
};