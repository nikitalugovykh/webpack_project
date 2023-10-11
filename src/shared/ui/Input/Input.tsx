import { type ChangeEvent, type FC, type InputHTMLAttributes, memo, useState } from 'react'
import { cn } from 'shared/libs/className'
import styles from './Input.module.scss'

type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputType {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props) => {
    const { className, value, onChange, placeholder, ...rest } = props

    const [isFocus, setIsFocus] = useState(false)

    const [caretPosition, setCaretPosition] = useState<number>(0)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        if (typeof onChange === 'function') { onChange(e.target.value) }
        setCaretPosition(e.target.value.length)
    }

    const onBlur = (): void => {
        setIsFocus(false)
    }

    const onFocus = (): void => {
        setIsFocus(true)
    }

    return (
        <div className={cn(styles.InputWrapper, {}, [className])}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder} > `}</div>}
            <div className={styles.caretWrapper}>
                <input
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={styles.input}
                    onChange={onChangeHandler}
                    {...rest}
                />
                {isFocus && <span
                    className={styles.caret}
                    style={{ left: `${caretPosition * 9}px` }}
                />}
            </div>
        </div>
    )
})

Input.displayName = 'Input'
