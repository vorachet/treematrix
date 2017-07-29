const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './dist/treematrix.js'
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
    ],
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: [
              'babel-loader',
            ],
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
   }
}
