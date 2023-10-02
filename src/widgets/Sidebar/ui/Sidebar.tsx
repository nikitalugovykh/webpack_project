import { type FC, useState } from 'react'
import { cn } from 'shared/libs/className'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { AppLink } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (
    { className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t: tAbout } = useTranslation('about')
    const { t: tHome } = useTranslation('home')

    const onToggle = (): void => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div data-testid={'sidebar'} className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button
                className={styles.collapseBtn}
                data-testid={'sidebar-toggle'}
                onClick={onToggle}
                theme={'backgroundInverted'}
                square
                size={'medium'}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    className={styles.item}
                    variant={'secondary'}
                    to={RoutePath.home}
                >
                    <HomeIcon className={styles.icon}/>
                    <span className={cn(styles.link, { collapsed })}>{tHome('Home page')}</span>
                </AppLink>
                <AppLink
                    className={styles.item}
                    to={RoutePath.about}
                >
                    <AboutIcon className={styles.icon}/>
                    <span className={cn(styles.link, { collapsed })}>{tAbout('About page')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    )
}
