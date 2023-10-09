import { type FC, type ReactNode, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/config/theme'

interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Theme
}

const defaultThemeValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultThemeValue)

    useEffect(() => {
        document.body.classList.add(defaultThemeValue)
    }, [])

    const propsMemo = useMemo(() => {
        return ({
            theme,
            setTheme
        })
    }, [theme])

    return (
        <ThemeContext.Provider value={propsMemo}>{children}</ThemeContext.Provider>
    )
}
export default ThemeProvider
