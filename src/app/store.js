import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/CounterSlice'
import productReducer from '../features/products/productSlice'
import { productsApi } from '../services/Product'
export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})
setupListeners(store.dispatch)


