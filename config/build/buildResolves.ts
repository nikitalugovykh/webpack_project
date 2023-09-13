import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export const buildResolves = ({ paths }: BuildOptions): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // для абсолютных путей
        modules: [paths.src, 'node_modules'], // для абсолютных путей
        // mainFields: ['index'], // для абсолютных путей
        alias: {} // для абсолютных путей
    }
}
