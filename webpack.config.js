//entry -> output
const path = require('path');


module.exports = {
    //webpack configurations details
    entry: './src/app.js',
    //entry: './src/playground/hoc.js',
    output:{
        //path is the absolute path on your machine where
        //you want to output that web pack file
        //joining absolute path with the local path to the public folder
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }]
      },
      devtool: 'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      }
    };
    