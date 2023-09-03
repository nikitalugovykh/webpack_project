import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = ({paths, isDev}: BuildOptions): webpack.RuleSetRule[] => {

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }


    const cssLoaderSettings =  {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (path: string) => path.includes('.module.'),
                    localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                },
            }
        }


    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderSettings
        ],
    }


    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // style-loader - добавляет стили в один файл js
            //MiniCssExtractPlugin.loader - добавляет стили в отдельный файл css
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Creates `style` nodes from JS strings
            cssLoaderSettings,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        tsLoader,
        cssLoader,
        scssLoader
    ]
}