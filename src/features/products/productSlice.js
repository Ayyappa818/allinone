import products from './products.json'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products,
  CartItems:[]
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   addToCart:(state,action)=>{
    state.CartItems.push(action.payload)                        
   }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions

const productReducer = productSlice.reducer
export default productReducer;     