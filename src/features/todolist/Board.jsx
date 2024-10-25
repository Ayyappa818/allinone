import React from 'react'
import { useGetAllTodoListsQuery } from '../../services/BoardApi'

function Board() {
    var{isLoading,data}=useGetAllTodoListsQuery()
  return (
    <div>
      <h1>Board</h1>
    </div>
  )
}

export default Board
