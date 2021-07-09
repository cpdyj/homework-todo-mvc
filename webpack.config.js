// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Package = require("./package.json")
const webpack = require("webpack")


const isProduction = process.env.NODE_ENV === "production";

const config = {
    entry: {
        main: "./src/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js',
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(isProduction),
            VERSION: JSON.stringify(Package.version),
            BUILD_TIME: JSON.stringify(new Date().toUTCString())
        }),
        new webpack.ids.HashedModuleIdsPlugin({
            context: __dirname,
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
            {
                test: /87679624_p0\.jpg/i,
                type: "asset/inline"
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

module.exports = () => {
    config.mode = isProduction ? "production" : "development"
    return config;
};
