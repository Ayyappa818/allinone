import React from 'react'
import { useAddNewTaskMutation } from '../../services/BoardApi';

function StatusBoard({todol,type}) {
  var [updateTodolistFn]=useAddNewTaskMutation()
function handleDragstart(ev,tid){
  ev.dataTransfer.setData("abc",JSON.stringify({"id":ev.target.id,"tid":tid}))
}

function handleDrop(ev,tid){
  console.log(tid)
  var {id,tid}=JSON.parse(ev.dataTransfer.getData("abc"));
// console.log(todol)
  var temp=JSON.parse(JSON.stringify(todol));
var todos =temp.todos.map((t)=>{
  if(t.id===tid){
    t.status=type;
  }
    return t
})
temp.todos=todos;
updateTodolistFn(temp).then(()=>{})

  if(ev.target.tagName==="LI"){
    ev.target.parentElement.appendChild(document.getElementById(id))
  }
  ev.target.appendChild(document.getElementById(id))
}

  return (
    <div class="border border-danger-rounded w-25 m-2">
      <h3 class="bg-secondary p-2">{type.toUpperCase()}</h3>
      <ul onDragOver={(ev)=>{ev.preventDefault()}} onDrop={(ev)=>{handleDrop(ev)}} className='h-100 p-0'>
      {
        todol?.todos?.filter(todo=>todo.status==type).map((to,i)=>{
          return <li id={`${to.task}${i}`} draggable="true" onDragStart={(event)=>{handleDragstart(event,to.id)}} className='shadow p-2 m-2 bg-success text-light rounded' style={{listStyle:'none'}}>{to.task} 
          <i class="bi bi-trash3-fill d-flex justify-content-end" ></i>
          </li>
        })
      }
      </ul>
    </div>
  )
}

export default StatusBoard
