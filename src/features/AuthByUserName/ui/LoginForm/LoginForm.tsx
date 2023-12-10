import { type FC, memo, useCallback } from 'react'
import { cn } from 'shared/libs/className'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUserNameThunk } from '../../model/services/loginByUserNameThunk'
import { Text, TextTheme } from 'shared/ui/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch<any>(loginByUserNameThunk({ password, username }))
    }, [dispatch, password, username])

    return (
        <div
            className={cn(styles.LoginForm, {}, [className])}
        >
            <Text title={t('Authorization form')}/>
            {error && <Text theme={TextTheme.ERROR} text={t('You have entered an invalid username or password')}/>}
            <Input value={username} onChange={onChangeUsername} autofocus placeholder={t('Enter username')} type="text"/>
            <Input value={password} onChange={onChangePassword} placeholder={t('Enter password')} type="text"/>
            <Button disabled={isLoading} onClick={onLoginClick} className={styles.loginBtn}>{t('Submit')}</Button>
        </div>

    )
})

LoginForm.displayName = 'LoginForm'
