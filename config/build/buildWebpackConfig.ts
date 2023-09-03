import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    return {
        mode,
        entry: paths.entry,
        devtool: 'inline-source-map',
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
    }
}