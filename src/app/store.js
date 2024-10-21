import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/CounterSlice'
import productReducer from '../features/products/productSlice'
export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    productReducer
  },
})