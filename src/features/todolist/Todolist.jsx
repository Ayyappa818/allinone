import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddNewTaskMutation, useGetTodolistByIdQuery } from '../../services/BoardApi'

function Todolist() {
    var [newTodo,setNewTodo]=useState('')
    var {id}=useParams()
    var {isLoading,data}=useGetTodolistByIdQuery(id)
    var [addTodoFn]=useAddNewTaskMutation()
    function addTodo(){
        var temp=JSON.parse(JSON.stringify(data));
        temp.todos.push({task:newTodo,status:false});
        addTodoFn(temp)
    }
    // console.log(isLoading,data)
  return (
    <div>
      <h1>{!isLoading && data.title.toUpperCase()} Todolist</h1>
      {
        isLoading && <b>Loading....</b>
      }
      <input type="text" name="" id="" />
      <button onClick={()=>{addTodo()}}>Add New Task</button>
      {
        !isLoading && data.todos.map((t)=>{
            return <li>{t.task}</li>
        })
      }
    </div>
  )
}

export default Todolist
