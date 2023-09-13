import { type FC, useState } from 'react'
import { cn } from 'shared/libs/cn'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = (): void => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>{collapsed ? t('Open') : t('Close')}</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
