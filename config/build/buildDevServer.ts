import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer ({paths, port}: BuildOptions): DevServerConfiguration {
    return ({
        port,
        open: true,
        historyApiFallback: true, // нужен для react-router, чтобы при перезагрузке страницы не выдавало 404,  мы проксируем все через единый index.html файл, те
    //     если при перезагрузке страницы мы неи будем искать html файл about.html, а просто отдадим index.html (тк это SPA приложение)
    })
}