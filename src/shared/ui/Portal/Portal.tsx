import { type FC, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}
// hack for storybook
export const Portal: FC<PortalProps> = ({ children, element = document.getElementById('root') ?? document.body }) => {
    if (!element) return null
    return (
        createPortal(children, element)
    )
}
