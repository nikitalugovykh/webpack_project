import axios from 'axios'
import { loginByUserNameThunk } from './loginByUserNameThunk'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('LoginByUserNameThunk', () => {
    // let dispatch: Dispatch
    // let getState: () => StateScheme
    //
    // beforeEach(() => {
    //     dispatch = jest.fn()
    //     getState = jest.fn()
    // })
    // test('success login', async () => {
    //     const userValue = { username: 'test', id: '1' }
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    //     const action = loginByUserNameThunk({ username: '123', password: '123' })
    //     const result = await action(dispatch, getState, undefined)
    //     console.log(result)
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toEqual('fulfilled')
    //     expect(result.payload).toEqual(userValue)
    // })
    //
    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    //     const action = loginByUserNameThunk({ username: '123', password: '123' })
    //     const result = await action(dispatch, getState, undefined)
    //     console.log(result)
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toEqual('rejected')
    //     expect(result.payload).toEqual('Error')
    // })

    test('success login', async () => {
        const userValue = { username: 'test', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const thunk = new TestAsyncThunk(loginByUserNameThunk)

        const result = await thunk.callThunk({ username: '123', password: '123' })
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUserNameThunk)

        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toEqual('Error')
    })
})
