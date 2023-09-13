import { type FC, useState } from 'react'
import { cn } from 'shared/libs/cn'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
