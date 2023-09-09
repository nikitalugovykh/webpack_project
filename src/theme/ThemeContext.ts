import {createContext, useContext, useState} from "react";

export const enum Theme {
    Normal = 'normal',
    Dark = 'dark'
}
export const LOCAL_STORAGE_THEME_KEY = 'theme'

interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

interface UseThemeReturn {
    theme: Theme,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({theme: Theme.Normal, setTheme: () => {}})

export const useTheme = (): UseThemeReturn => {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === Theme.Dark ? Theme.Normal : Theme.Dark
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {theme, toggleTheme}
}

