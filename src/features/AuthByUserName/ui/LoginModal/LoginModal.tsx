import { type FC, Suspense } from 'react'
import { cn } from 'shared/libs/className'
import { Modal } from 'shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader'

interface LoginModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal
            className={cn('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync/>
            </Suspense>
        </Modal>
    )
}
