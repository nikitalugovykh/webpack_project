import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { cn } from 'shared/libs/className/cn'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    disabled?: boolean
    theme?: 'primary' | 'secondary' | 'clear' | 'clearInverted' | 'outline' | 'background' | 'backgroundInverted'
    square?: boolean
    size?: 'small' | 'medium' | 'large'
}

const Button: FC<ButtonProps> = (
    {
        className,
        children,
        disabled,
        theme = 'primary',
        size = 'small',
        square,
        ...rest
    }) => {
    const mods: Record<string, boolean> = {
        [styles.square]: square,
        [styles[size]]: !!size,
        [styles.disabled]: disabled

    }

    return (
        <button disabled={disabled} className={cn(styles.Button, mods, [className, styles[theme]])} {...rest}>{children}</button>
    )
}

export default Button
