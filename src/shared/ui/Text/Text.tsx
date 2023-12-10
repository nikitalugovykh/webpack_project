import { type FC } from 'react'
import { cn } from 'shared/libs/className'
import styles from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text: FC<TextProps> = ({ className, title, text, theme = TextTheme.PRIMARY }) => {
    return (
        <div
            className={cn('', {}, [className, styles[theme]])}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
}
