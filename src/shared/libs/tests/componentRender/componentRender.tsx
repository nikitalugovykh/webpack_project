import { type ReactNode } from 'react'
import {
    MemoryRouter
} from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18n_forTest'
import { I18nextProvider } from 'react-i18next'
import { render, type RenderResult } from '@testing-library/react'

interface IComponentRenderOptions {
    route?: string
}

export const componentRender = (component: ReactNode, options: IComponentRenderOptions = {}): RenderResult => {
    const { route = '/' } = options
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>

    )
}
