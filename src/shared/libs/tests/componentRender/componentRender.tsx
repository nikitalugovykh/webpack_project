import { type ReactNode } from 'react'
import {
    MemoryRouter
} from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18n_forTest'
import { I18nextProvider } from 'react-i18next'
import { render, type RenderResult } from '@testing-library/react'
import { StoreProvider } from 'app/store/StoreProvider'
import { type StateScheme } from 'app/store'

interface IComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateScheme>
}

export const componentRender = (component: ReactNode, options: IComponentRenderOptions = {}): RenderResult => {
    const { route = '/', initialState } = options
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState as StateScheme}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>

    )
}
