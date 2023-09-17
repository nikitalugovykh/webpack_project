import { type FC } from 'react'
import { cn } from 'shared/libs/className/cn'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation()

    const reloadPage = (): void => {
        location.reload()
    }

    return (
        <div className={cn(styles.PageError, {}, [className])}>
            <p>
                {t('Something went wrong')}
            </p>
            <Button onClick={reloadPage}>{t('Update page')}</Button>
        </div>
    )
}
