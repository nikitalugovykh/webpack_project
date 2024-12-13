import { type FC, memo, useState } from 'react'
import { cn } from 'shared/libs/className'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { SidebarItemsList } from '../../model/items'
import SidebarItem from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = (
    { className }) => {
    const [collapsed, setCollapsed] = useState(false)

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
                {SidebarItemsList.map(item => (
                    <SidebarItem collapsed = {collapsed} key={item.path} item={item} />
                ))}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    )
}

export default memo(Sidebar)
