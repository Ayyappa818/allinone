import React from 'react'

function StatusBoard({todol,type}) {
console.log(todol)
function handleDragstart(ev,tid){
  ev.dataTransfer.setData("abc",JSON.stringify({"id":ev.target.id,"tid":tid}))
}
function handleDrop(ev,tid){
  console.log(tid)
  var {id,tid}=JSON.parse(ev.dataTransfer.getData("abc"));
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
          return <li id={`${to.task}${i}`} draggable="true" onDragStart={(event)=>{handleDragstart(event,to.id)}} className='shadow p-2 m-2 bg-success text-light rounded' style={{listStyle:'none'}}>{to.task}</li>
        })
      }
      </ul>
    </div>
  )
}

export default StatusBoard
