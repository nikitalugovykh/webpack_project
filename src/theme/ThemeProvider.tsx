import {FC, ReactNode, useMemo, useState} from 'react'
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface ThemeProviderProps {
    children: ReactNode
}

const defaultThemeValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Normal

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultThemeValue)



    const propsMemo = useMemo(() => {
        return ({
            theme,
            setTheme
        })
    },[theme])

    return (
        <ThemeContext.Provider value={propsMemo}>{children}</ThemeContext.Provider>
    )
}
export default ThemeProvider