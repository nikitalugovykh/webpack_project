import { type StateScheme } from 'app/store'
import { type AsyncThunkAction } from '@reduxjs/toolkit'

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateScheme

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk (args: Arg) {
        const action = this.actionCreator(args)
        const result = await action(this.dispatch, this.getState, undefined)
        return result
    }
}
