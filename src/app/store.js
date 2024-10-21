import { configureStore } from '@reduxjs/toolkit'
import CounterReaducer from '../features/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter:CounterReaducer
  },
})