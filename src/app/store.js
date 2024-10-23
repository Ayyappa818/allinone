import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/CounterSlice'
import productReducer from '../features/products/productSlice'
import { productsApi } from '../services/Product'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todosApi } from '../services/Todos'
export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [todosApi.reducerPath]:todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware,todosApi.middleware),
})
setupListeners(store.dispatch)


