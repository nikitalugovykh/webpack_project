import React, {FC} from 'react'
import styles from './NavBar.module.scss'
import {cn} from "shared/libs/cn";
import {AppLink} from "shared/ui/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavBarProps {
    className?: string
}

export const NavBar:FC<NavBarProps> = ({className}) => {
    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={styles.links}>
                <AppLink variant={'secondary'} to ={'/'}>Home</AppLink>
                <AppLink to ={'/about'}>About</AppLink>
            </div>
        </div>
    )
}

