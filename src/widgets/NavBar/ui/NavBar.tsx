import { type FC } from 'react'
import styles from './NavBar.module.scss'
import { cn } from 'shared/libs/className/cn'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <div className={styles.links}>

            </div>
        </div>
    )
}
