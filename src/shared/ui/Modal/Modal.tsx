import { type FC, type ReactNode, useCallback, type MouseEvent, useState, useRef, useEffect } from 'react'
import { cn, type Mods } from 'shared/libs/className'
import styles from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal'
import { useTheme } from 'shared/config/theme'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    element?: HTMLElement
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, lazy, isOpen, onClose, element } = props
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const { theme } = useTheme()

    const [isClosing, setIsClosing] = useState<boolean>(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    const onCloseHandler = useCallback((): void => {
        if (typeof onClose === 'function') {
            setIsClosing(true)
            timeoutRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = useCallback((e: MouseEvent): void => {
        e.stopPropagation()
    }, [])

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.code === 'Escape') {
            onCloseHandler()
        }
    }, [onCloseHandler])

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted) return null

    return (
        <Portal element={element}>
            <div className={cn(styles.Modal, mods, [className, theme])}>
                <div className={styles.overlay} onClick={onCloseHandler}>
                    <div className={styles.content} onClick={onContentClick}>{children}</div>
                </div>
            </div>
        </Portal>
    )
}
