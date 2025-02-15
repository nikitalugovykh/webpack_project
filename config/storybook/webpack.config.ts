/* eslint-disable @typescript-eslint/no-non-null-assertion */

import webpack from 'webpack'
import { type BuildOptions, type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader, buildScssLoader } from '../build/loaders/buildStyleLoaders'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve!.modules!.push(paths.src)
    config.resolve!.extensions!.push('.ts', '.tsx')

    config.module!.rules = config.module!.rules!.map<webpack.RuleSetRule>((rule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes,@typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if ((rule.test as string).includes('svg')) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module!.rules.push(buildSvgLoader())
    config.module!.rules.push(buildCssLoader({ isDev: true } as BuildOptions))
    config.module!.rules.push(buildScssLoader({ isDev: true } as BuildOptions))

    config.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('')
    }))

    return config
}
