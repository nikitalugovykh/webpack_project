import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from 'shared/config/i18n/i18n_forTest'
import { render } from '@testing-library/react'

export function renderWithTranslation (component: ReactNode): any {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            {component}
        </I18nextProvider>
    )
}
