import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddNewTaskMutation, useGetTodolistByIdQuery, useLazyGetTodolistByIdQuery } from '../../services/BoardApi'

function Todolist() {
  var {id}=useParams()
    var [newTodo,setNewTodo]=useState('')
    var {isLoading,data}=useGetTodolistByIdQuery(id)
    var [addTodoFn]=useAddNewTaskMutation()
    var [getTodolistFn]=useLazyGetTodolistByIdQuery()
    async function addTodo(){
        var temp=JSON.parse(JSON.stringify(data));
        temp.todos.push({task:newTodo,status:false});
        await addTodoFn(temp)
        getTodolistFn(id);
    }
    // console.log(isLoading,data)
  return (
    <div>
      <h1>{!isLoading && data.title.toUpperCase()} Todolist</h1>
      {
        isLoading && <b>Loading....</b>
      }
      <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}} />
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
