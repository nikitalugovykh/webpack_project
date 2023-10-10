import { componentRender } from 'shared/libs/tests/componentRender'
import { screen, waitFor } from '@testing-library/react'
import { Counter } from './Counter'
import { userEvent } from '@storybook/testing-library'

describe('Counter', () => {
    it('should display value from store', () => {
        componentRender(<Counter/>, { initialState: { counter: { value: 10 } } })

        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    it('should display incremented value', async () => {
        componentRender(<Counter/>, { initialState: { counter: { value: 10 } } })

        userEvent.click(screen.getByTestId('button-increment'))
        await waitFor(() => {
            expect(screen.getByTestId('value-title')).toHaveTextContent('11')
        })
    })
    it('should display decremented value', async () => {
        componentRender(<Counter/>, { initialState: { counter: { value: 10 } } })

        userEvent.click(screen.getByTestId('button-decrement'))
        await waitFor(() => {
            expect(screen.getByTestId('value-title')).toHaveTextContent('9')
        })
    })
})
