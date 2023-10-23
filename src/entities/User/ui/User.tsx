import { type FC } from 'react'
import { cn } from 'shared/libs/className'

interface UserProps {
    className?: string
}

export const User: FC<UserProps> = ({ className }) => {
    return (
        <div className={cn('', {}, [className])}></div>
    )
}
