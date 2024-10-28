import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAddTodolistMutation, useLazyGetAllTodoListsQuery } from '../../services/BoardApi'

function Board() {
  var [listTitle,SetListTitle]=React.useState("")
  var [addTodolistFn]=useAddTodolistMutation()
  var [getAllTodolistFn]=useLazyGetAllTodoListsQuery()
  async function addTodolist(){
    var newTodolist={
      title:listTitle,
      todos:[]
    }
    await addTodolistFn(newTodolist)
    getAllTodolistFn()
  }
  return (
    <div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
+ADD TodoList
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">TodoList title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" onChange={(e)=>{SetListTitle(e.target.value)}}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{addTodolist()}}>Save changes</button>
      </div>
    </div>
  </div>
</div>
      <Outlet></Outlet>
    </div>
  )
}

export default Board
