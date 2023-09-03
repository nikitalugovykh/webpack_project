import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildLoaders = ({paths}: BuildOptions):webpack.RuleSetRule[] => {

    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        tsLoader
    ]
}