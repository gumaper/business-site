const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./app/assets/scripts/App.js", 
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"), 
    filename: "App.js" 
  },
  module: {
    loaders: [ 
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "babel-loader",
        options: {
            presets: ["es2015"]
          },
        },
    ]}
}
