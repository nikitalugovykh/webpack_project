import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader, buildScssLoader } from './loaders/buildStyleLoaders'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource'
        // use: [
        //     {
        //         loader: 'file-loader',
        //     },
        // ],
    }

    // const cssLoaderSettings = {
    //     loader: 'css-loader',
    //     options: {
    //         modules: {
    //             auto: (path: string) => path.includes('.module.'),
    //             localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
    //         }
    //     }
    // }
    //
    // const cssLoader = {
    //     test: /\.css$/i,
    //     use: [
    //         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    //         cssLoaderSettings
    //     ]
    // }
    //
    // const scssLoader = {
    //     test: /\.s[ac]ss$/i,
    //     use: [
    //         // style-loader - добавляет стили в один файл js
    //         // MiniCssExtractPlugin.loader - добавляет стили в отдельный файл css
    //         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    //         // Creates `style` nodes from JS strings
    //         cssLoaderSettings,
    //         // Compiles Sass to CSS
    //         'sass-loader'
    //     ]
    // }

    const babelLoader = {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
                // plugins: [
                //     ['i18next-extract', {
                //         locales: [
                //             'ru',
                //             'en'
                //         ],
                //         keyAsDefaultValue: true
                //     }]]
            }
        }
    }

    return [
        babelLoader,
        tsLoader,
        buildCssLoader(options),
        buildScssLoader(options),
        buildSvgLoader(),
        fileLoader
    ]
}
