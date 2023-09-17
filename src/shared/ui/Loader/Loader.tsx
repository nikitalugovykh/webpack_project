import { type FC } from 'react'
import { cn } from 'shared/libs/className/cn'
import styles from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <span className={cn(styles.Loader, {}, [className])}></span>
    )
}
