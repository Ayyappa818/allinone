import React, { useEffect } from 'react'
import { useGetAllTodoListsQuery, useLazyGetAllTodoListsQuery } from '../../services/BoardApi'
import Boardcard from './Boardcard'

function BMastercard() {
    var {isLoading,data}=useGetAllTodoListsQuery()
    // console.log(data)
    var [getAllTodolistFn]=useLazyGetAllTodoListsQuery()
    useEffect(()=>{
      getAllTodolistFn()
    })
  return (
    <div>
      {
        isLoading && <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      }
      <div className='d-flex flex-wrap justify-content-evenly'>
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
