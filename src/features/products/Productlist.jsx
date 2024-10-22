import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './productSlice'

function ProductList() {
    var {products}=useSelector(state=>state.productReducer)
    console.log(products)
    var dispatch=useDispatch()
  return (
    <div>
      <h1>Products</h1>
      {
        products?.map((p)=>{
            return <li>{p.title}<button onClick={()=>{dispatch(addToCart(p))}}>Add to cart</button></li>
        })
      }
    </div>
  )
}

export default ProductList
