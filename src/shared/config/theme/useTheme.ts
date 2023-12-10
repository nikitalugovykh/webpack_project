import { useContext } from 'react'
import { Theme, ThemeContext } from './ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants/localStorage'

interface UseThemeReturn {
    theme: Theme
    toggleTheme: () => void
    // updateTheme: (newTheme: Theme, oldTheme: Theme) => void
}
export const useTheme = (): UseThemeReturn => {
    const { theme, setTheme } = useContext(ThemeContext)

    const updateTheme = (newTheme: Theme, oldTheme: Theme): void => {
        document.body.classList.replace(oldTheme, newTheme)
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    const toggleTheme = (): void => {
        let newTheme: Theme
        switch (theme) {
            case Theme.Light:
                newTheme = Theme.Dark
                break
            case Theme.Dark:
                newTheme = Theme.Light
                break
            default:
                newTheme = Theme.Light
        }
        updateTheme(newTheme, theme)
        // setTheme(newTheme)
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return { theme, toggleTheme }
}
