import { type FC } from 'react'
import { cn } from 'shared/libs/className'
import { Button } from 'shared/ui/Button'
import { counterActions } from '../model/slice/counterSlice'
import {
    getCounterValueSelector
} from 'entities/Counter'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const counterValue = useAppSelector(getCounterValueSelector)
    const increment = (): void => {
        dispatch(counterActions.increment())
    }
    const decrement = (): void => {
        dispatch(counterActions.decrement())
    }

    return (
        <div className={cn('', {}, [className])}>
            <span data-testid={'value-title'}>{counterValue}</span>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid={'button-increment'} onClick={increment}>increment</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid={'button-decrement'} onClick={decrement}>decrement</Button>
        </div>
    )
}
