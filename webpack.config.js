const webpack = require("webpack");
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './dist/treematrix.js'
    },
    plugins: [
        //new JavaScriptObfuscator ({
        //   rotateUnicodeArray: true
        //}, ['excluded_bundle_name.js']),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        })

    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
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