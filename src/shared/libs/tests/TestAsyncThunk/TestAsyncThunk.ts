import { type StateScheme } from 'app/store'
import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type AsyncThunkFulfilledActionCreator, type AsyncThunkRejectedActionCreator } from '@reduxjs/toolkit/src/createAsyncThunk'

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue, meta: any }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateScheme

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk (args: Arg): Promise<
    | ReturnType<AsyncThunkFulfilledActionCreator<Return, Arg>>
    | ReturnType<AsyncThunkRejectedActionCreator<Arg, { rejectedValue: RejectedValue }>>
    > {
        const action = this.actionCreator(args)
        const result = await action(this.dispatch, this.getState, undefined)
        return result
    }
}
