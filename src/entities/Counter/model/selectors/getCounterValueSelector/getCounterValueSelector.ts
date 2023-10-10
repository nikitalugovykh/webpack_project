import { createSelector } from '@reduxjs/toolkit'
import { getCounterSelector } from '../getCounter/getCounterSelector'

export const getCounterValueSelector = createSelector(
    getCounterSelector,
    (counter) => counter.value
)
