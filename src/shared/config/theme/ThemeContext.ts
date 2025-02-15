import { createContext } from 'react'

export const enum Theme {
    Light = 'app_theme_light',
    Dark = 'app_theme_dark'
}

interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.Light, setTheme: () => {} })
