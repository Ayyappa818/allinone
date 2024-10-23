import React from 'react'
import { useAddTodoMutation } from '../../services/Todos'

function Todolist() {
  var [addTodoFn]=useAddTodoMutation()
  return (
    <div>
      <input type="text" name="" id="d1" />
      <button onClick={()=>{addTodoFn({title:document.getElementById("d1").value})}}>Add Todo</button>
    </div>
  )
}

export default Todolist
