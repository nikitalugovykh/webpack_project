import { type FC } from 'react'
import { cn } from 'shared/libs/cn'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div className={cn(styles.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    )
}
