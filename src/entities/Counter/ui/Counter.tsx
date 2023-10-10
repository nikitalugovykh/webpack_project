import { type FC } from 'react'
import { cn } from 'shared/libs/className'
import { Button } from 'shared/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import {
    getCounterValueSelector
} from 'entities/Counter'

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValueSelector)
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
