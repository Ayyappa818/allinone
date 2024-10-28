import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteTodolistMutation } from '../../services/BoardApi'

function Boardcard({todo}) {
    // console.log(todo)
    var [deleteTodoListFn]=useDeleteTodolistMutation();
    async function deleteTodoList(){
        await deleteTodoListFn(todo.id)
    }
  return (
        <div class="card w-25 m-4">
            <div class="card-header d-flex justify-content-between">
                {todo.title.toUpperCase()}
                <i class="bi bi-trash-fill text-danger" onClick={()=>{deleteTodoList()}}></i>
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Total:{todo.todos?.length}</h5>
                <ul class="card-text" style={{height:'100px',overflow:"scroll"}}>
                    {
                        todo?.todos.map((t)=>{
                            return <li>{t.task}</li>
                        })
                    }
                </ul>
                <Link to={`/todo/${todo.id}`} class="btn btn-primary">Add/View</Link>
            </div>
        </div>
  )
}

export default Boardcard
