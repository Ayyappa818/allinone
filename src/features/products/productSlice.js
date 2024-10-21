import products from './products.json'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

const productReducer = productSlice.reducer
export default productReducer;     