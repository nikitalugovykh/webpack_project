import { type FC } from 'react'
import { cn } from 'shared/libs/cn'
import styles from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={cn(styles.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}
