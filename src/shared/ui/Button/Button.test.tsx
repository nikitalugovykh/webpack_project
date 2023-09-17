import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
    test('should render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('should render button with clear theme', () => {
        render(<Button theme={'clear'}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
