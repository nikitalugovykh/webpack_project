import { type FC, memo } from 'react'
import { cn } from 'shared/libs/className'
import styles from './SidebarItem.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { type SidebarItemType } from '../../model/items'
import { useTranslation } from 'react-i18next'

interface SidebarItemProps {
    item?: SidebarItemType
    collapsed: boolean
}

const SidebarItem: FC<SidebarItemProps> = ({ item, collapsed }) => {
    const { t } = useTranslation()

    return (
        <AppLink
            className={cn(styles.item, { [styles.collapsed]: collapsed })}
            variant={'secondary'}
            to={item.path}
        >
            <item.Icon className={styles.icon}/>
            <span className={cn(styles.link, { collapsed })}>{t(item.text)}</span>
        </AppLink>
    )
}

export default memo(SidebarItem)
