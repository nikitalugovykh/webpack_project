import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type BuildOptions } from '../types/config'

const getCssLoaderSettings = (isDev: boolean) => {
    return {
        loader: 'css-loader',
        options: {
            modules: {
                auto: (path: string) => path.includes('.module.'),
                localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
            }
        }
    }
}

export const buildScssLoader = ({ isDev }: BuildOptions): webpack.RuleSetRule => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // style-loader - добавляет стили в один файл js
            // MiniCssExtractPlugin.loader - добавляет стили в отдельный файл css
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Creates `style` nodes from JS strings
            getCssLoaderSettings(isDev),
            // Compiles Sass to CSS
            'sass-loader'
        ]
    }
}

export const buildCssLoader = ({ isDev }: BuildOptions): webpack.RuleSetRule => {
    return {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            getCssLoaderSettings(isDev)
        ]
    }
}
