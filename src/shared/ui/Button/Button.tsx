import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { cn } from 'shared/libs/className/cn'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    theme?: 'primary' | 'secondary' | 'clear' | 'outline'
}

const Button: FC<ButtonProps> = ({ className, children, theme = 'primary', ...rest }) => {
    return (
        <button className={cn(styles.Button, {}, [className, styles[theme]])} {...rest}>{children}</button>
    )
}

export default Button
