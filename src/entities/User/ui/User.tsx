import { type FC } from 'react'
import { cn } from 'shared/libs/className'
import styles from './User.module.scss'

interface UserProps {
    className?: string
}

export const User: FC<UserProps> = ({ className }) => {
    return (
        <div className={cn(styles.User, {}, [className])}></div>
    )
}
