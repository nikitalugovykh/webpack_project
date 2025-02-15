import { type ChangeEvent, type FC, type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { cn } from 'shared/libs/className'
import styles from './Input.module.scss'

type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputType {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
    const { className, autofocus, value, onChange, placeholder, ...rest } = props
    const inputRef = useRef<HTMLInputElement>(null)

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

    const onSelectHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus()
        }
    }, [autofocus])

    return (
        <div className={cn(styles.InputWrapper, {}, [className])}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder} > `}</div>}
            <div className={styles.caretWrapper}>
                <input
                    ref={inputRef}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    value={value}
                    className={styles.input}
                    onChange={onChangeHandler}
                    onSelect = {onSelectHandler}
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
