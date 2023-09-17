import { cn } from './cn'

describe('className', () => {
    test('with only first param', () => {
        expect(cn('className')).toBe('className')
    })

    test('with additional classes', () => {
        const expected = 'className add_first add_second'
        expect(cn('className', {}, ['add_first', 'add_second'])).toBe(expected)
    })

    test('with mods', () => {
        const expected = 'className add_first hovered clicked'
        expect(cn('className', {
            hovered: true,
            active: false,
            clicked: true
        }, ['add_first'])).toBe(expected)
    })
    test('with mods false', () => {
        const expected = 'className add_first'
        expect(cn('className', {
            hovered: false,
            active: false,
            clicked: false
        }, ['add_first'])).toBe(expected)
    })
    test('with mods undefined', () => {
        const expected = 'className add_first hovered'
        expect(cn('className', {
            hovered: true,
            clicked: undefined
        }, ['add_first'])).toBe(expected)
    })
})
