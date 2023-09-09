import {ButtonHTMLAttributes, FC, ReactNode} from 'react'
import {cn} from 'shared/libs/cn'
import styles from './Button.module.scss'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    theme: 'primary' | 'secondary' | 'clear'
}

const Button:FC<ButtonProps> = ({className, children, theme = 'primary', ...rest}) => {
    return (
        <button className={cn(styles.Button, {}, [className, styles[theme]])} {...rest}>{children}</button>
    )
}

export default Button