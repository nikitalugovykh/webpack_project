import type webpack from 'webpack'
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
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module.rules.push(buildSvgLoader())
    config.module.rules.push(buildCssLoader({ isDev: true } as BuildOptions))
    config.module.rules.push(buildScssLoader({ isDev: true } as BuildOptions))

    return config
}
