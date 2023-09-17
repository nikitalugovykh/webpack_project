import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
    const plugins = []

    plugins.push(new HtmlWebpackPlugin({
        template: paths.html
    }))
    plugins.push(new webpack.ProgressPlugin())

    plugins.push(new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[id].[contenthash].css'
    }))

    plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: isDev
    })) // плагин для пробрасывания переменных в код

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }
    plugins.push(new BundleAnalyzerPlugin({
        openAnalyzer: false
    }))

    return plugins
}
