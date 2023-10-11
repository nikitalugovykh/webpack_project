import { type FC, type ReactNode } from 'react'
import { cn } from 'shared/libs/className'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div
            className={cn(styles.LoginForm, {}, [className])}
        >
            <Input type="text"/>
            <Input type="text"/>
            <Button className={styles.loginBtn}>{t('hello')}</Button>
        </div>

    )
}
