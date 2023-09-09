import {createContext,} from "react";

export const enum Theme {
    Normal = 'normal',
    Dark = 'dark'
}
export const LOCAL_STORAGE_THEME_KEY = 'theme'

interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({theme: Theme.Normal, setTheme: () => {}})


