import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {BuildOptions} from "./types/config";

export const buildPlugins = ({paths}: BuildOptions):webpack.WebpackPluginInstance[] => {

        const htmlWebpackPlugin = new HtmlWebpackPlugin({
            template: paths.html,
        })
        const progressPlugin = new webpack.ProgressPlugin()


    return [
        htmlWebpackPlugin,
        progressPlugin
    ]
}