import { type FC, useState, useCallback, memo } from 'react'
import styles from './NavBar.module.scss'
import { cn } from 'shared/libs/className/cn'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUserName'
import { getAuthUserData, userActions } from 'entities/User'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

interface NavBarProps {
    className?: string
}

// eslint-disable-next-line react/display-name
export const NavBar: FC<NavBarProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const authData = useAppSelector(getAuthUserData)
    const dispatch = useAppDispatch()
    const [isAuthModal, setAuthModal] = useState<boolean>(false)

    const onCloseModal = useCallback(() => {
        setAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={cn(styles.navbar, {}, [className])}>
                <Button
                    theme={'clearInverted'}
                    className={styles.links}
                    onClick={onLogout}
                >{t('Logout')}</Button>
            </div>
        )
    }

    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <Button
                theme={'clearInverted'}
                className={styles.links}
                onClick={onShowModal}
            >{t('Login')}</Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
        </div>
    )
})
