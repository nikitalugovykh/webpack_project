import React, {FC} from 'react'
import {cn} from 'shared/libs/cn'
import styles from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "shared/config/theme";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import {Button} from "shared/ui/Button";


interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher:FC<ThemeSwitcherProps>  = ({className}) => {

    const {theme, toggleTheme} = useTheme()

    return (
        <Button theme={'clear'} onClick={toggleTheme} className={cn(styles.ThemeSwitcher, {}, [className])}>
            {theme === Theme.Dark ? <DarkIcon/> : <LightIcon />}
        </Button>
    )
}

export default ThemeSwitcher