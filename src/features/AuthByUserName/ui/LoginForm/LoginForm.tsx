import { type FC } from 'react'
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
            <Input autofocus placeholder={t('Enter username')} type="text"/>
            <Input placeholder={t('Enter password')} type="text"/>
            <Button className={styles.loginBtn}>{t('Submit')}</Button>
        </div>

    )
}
