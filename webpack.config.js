const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'



module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist", 
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/markup/index.pug'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
      ],
    devServer: {
        contentBase: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "babel-loader"
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                //   'postcss-loader',
                  'sass-loader',
                ],
              },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }

        ]
    },
}