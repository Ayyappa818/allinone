import React from 'react'
import { useGetProductsQuery } from '../../services/Product'

function Newproducts() {
    var {isLoading,data}=useGetProductsQuery()
    console.log(isLoading,data)
  return (
    <div>
      <h1>New products</h1>
      {
        isLoading && <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      }
      {
        !isLoading && data.map((p)=>{
          return <li>{p.title}</li>
        })
      }
    </div>
  )
}

export default Newproducts
