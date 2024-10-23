import React from 'react'
import { useGetProductsQuery } from '../../services/Product'

function Newproducts() {
    var {isLoading,data}=useGetProductsQuery()
  return (
    <div>
      
    </div>
  )
}

export default Newproducts
