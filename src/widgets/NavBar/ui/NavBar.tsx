import { type FC } from 'react'
import styles from './NavBar.module.scss'
import { cn } from 'shared/libs/className/cn'
import { AppLink } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t: tAbout } = useTranslation('about')
    const { t: tHome } = useTranslation('home')
    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink variant={'secondary'} to ={'/'}>{tHome('Home page')}</AppLink>
                <AppLink to ={'/about'}>{tAbout('About page')}</AppLink>
            </div>
        </div>
    )
}
