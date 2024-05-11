import { type FC, useState, useCallback } from 'react'
import styles from './NavBar.module.scss'
import { cn } from 'shared/libs/className/cn'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthUserData, userActions } from 'entities/User'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()
    const authData = useSelector(getAuthUserData)
    const dispatch = useDispatch()
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
}
