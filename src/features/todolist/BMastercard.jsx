import React from 'react'
import { useGetAllTodoListsQuery } from '../../services/BoardApi'
import Boardcard from './Boardcard'

function BMastercard() {
    var {isLoading,data}=useGetAllTodoListsQuery()
    // console.log(data)
  return (
    <div>
      {
        isLoading && <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      }
      <div className='d-flex'>
      {
        !isLoading && data?.map((todo)=>{
          return <Boardcard todo={todo}></Boardcard>
        })
      }
      </div>
    </div>
  )
}

export default BMastercard
