const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const isProduction = process.env.NODE_ENV === "production";
module.exports = {
    entry: "./index.js",
    mode: "development",
    // mode: isProduction ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },
    // devtool: isProduction ? "hidden-source-map" : "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    plugins: [
        // new CopyPlugin({
        //     patterns: [{ from: "static", to: "static" }],
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};