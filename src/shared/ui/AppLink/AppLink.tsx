import { type FC, type ReactNode } from 'react'
import { cn } from 'shared/libs/className/cn'
import styles from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
    className?: string
    children: ReactNode
    variant?: 'primary' | 'secondary'
}

const AppLink: FC<AppLinkProps> = ({ className, children, variant = 'primary', to, ...rest }) => {
    return (
        <Link to={to} className={cn(styles.AppLink, {}, [className, styles[variant]])} {...rest}>{children}</Link>
    )
}

export default AppLink
