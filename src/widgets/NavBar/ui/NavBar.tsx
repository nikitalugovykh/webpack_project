import { type FC, useState, useCallback } from 'react'
import styles from './NavBar.module.scss'
import { cn } from 'shared/libs/className/cn'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Modal } from 'shared/ui/Modal'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()

    const [isAuthModal, setAuthModal] = useState<boolean>(false)

    const onToggleModal = useCallback(() => {
        setAuthModal(prev => !prev)
    }, [])

    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <Button
                theme={'clearInverted'}
                className={styles.links}
                onClick={() => { setAuthModal(true) }}
            >{t('Login')}</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At similique, totam? Ab cum dolorem et explicabo hic incidunt ipsum nisi numquam, obcaecati quas quibusdam reiciendis rerum sint temporibus vero voluptate.
            </Modal>
        </div>
    )
}
