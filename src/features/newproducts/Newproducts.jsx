import React from 'react'
import { useGetProductsQuery } from '../../services/Product'

function Newproducts() {
    var {isLoading,data}=useGetProductsQuery()
    console.log(isLoading,data)
  return (
    <div>
      <h1>New products</h1>
    </div>
  )
}

export default Newproducts
