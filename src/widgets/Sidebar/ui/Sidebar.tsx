import React, {FC, useState} from 'react'
import {cn} from 'shared/libs/cn'
import styles from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface SidebarProps {
    className?: string
}

export const Sidebar:FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)


    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={cn(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}

