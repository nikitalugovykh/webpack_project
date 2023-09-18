import { type FC, useState } from 'react'
import { cn } from 'shared/libs/className'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (
    { className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = (): void => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div data-testid={'sidebar'} className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button data-testid={'sidebar-toggle'} onClick={onToggle}>{collapsed ? t('Open') : t('Close')}</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
