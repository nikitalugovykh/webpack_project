import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BuildOptions} from "./types/config";

export const buildPlugins = ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] => {

    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: paths.html,
    })
    const progressPlugin = new webpack.ProgressPlugin()

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[id].[contenthash].css',
    })

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: isDev,
    }) // плагин для пробрасывания переменных в код

    return [
        htmlWebpackPlugin,
        progressPlugin,
        miniCssExtractPlugin,
        definePlugin
    ]
}