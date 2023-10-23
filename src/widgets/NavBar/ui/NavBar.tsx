import { type FC, useState, useCallback } from 'react'
import styles from './NavBar.module.scss'
import { cn } from 'shared/libs/className/cn'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUserName'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()

    const [isAuthModal, setAuthModal] = useState<boolean>(false)

    const onCloseModal = useCallback(() => {
        setAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setAuthModal(true)
    }, [])

    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <Button
                theme={'clearInverted'}
                className={styles.links}
                onClick={onShowModal}
            >{t('Login')}</Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    )
}
