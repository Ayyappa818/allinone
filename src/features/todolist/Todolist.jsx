import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddNewTaskMutation, useGetTodolistByIdQuery, useLazyGetTodolistByIdQuery } from '../../services/BoardApi'
import StatusBoard from './StatusBoard'

function Todolist() {
  var {id}=useParams()
    var [newTodo,setNewTodo]=useState('')
    var {isLoading,data}=useGetTodolistByIdQuery(id)
    var [addTodoFn]=useAddNewTaskMutation()
    var [getTodolistFn]=useLazyGetTodolistByIdQuery()
    async function addTodo(){
        var temp=JSON.parse(JSON.stringify(data));
        temp.todos.push({task:newTodo,status:"todo",id:`t${data?.todos.length+1}`});
        await addTodoFn(temp)
        getTodolistFn(id);
    }
    // console.log(isLoading,data)
    async function delTOdo(i){
      var temp=JSON.parse(JSON.stringify(data));
      temp.todos.splice(i,1);
      await addTodoFn(temp)
      getTodolistFn(id)
    }
  return (
    <div>
      <h1>{!isLoading && data.title.toUpperCase()} Todolist</h1>
      {
        isLoading && <b>Loading....</b>
      }
      <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}} />
      <button class="btn btn-info p-2 m-2" onClick={()=>{addTodo()}}>Add New Task</button>
      <div class="d-flex justify-content-evenly">
      <StatusBoard todol={data} type="todo"></StatusBoard>
      <StatusBoard todol={data} type="doing"></StatusBoard>
      <StatusBoard todol={data} type="done"></StatusBoard>
      </div>
    </div>
  )
}

export default Todolist
