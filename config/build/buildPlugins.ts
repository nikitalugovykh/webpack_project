import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BuildOptions} from "./types/config";

export const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => {

    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: paths.html,
    })
    const progressPlugin = new webpack.ProgressPlugin()

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[id].[contenthash].css',
    })

    return [
        htmlWebpackPlugin,
        progressPlugin,
        miniCssExtractPlugin
    ]
}