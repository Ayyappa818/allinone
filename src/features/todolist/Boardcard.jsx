import React from 'react'
import { Link } from 'react-router-dom'

function Boardcard({todo}) {
    // console.log(todo)
  return (
        <div class="card w-25 m-4">
            <div class="card-header">
                {todo.title.toUpperCase()}
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Total:{todo.todos?.length}</h5>
                <ul class="card-text">
                    {
                        todo?.todos.map((t)=>{
                            return <li>{t.task}</li>
                        })
                    }
                </ul>
                <Link to={`/todo/${todo.id}`} class="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
  )
}

export default Boardcard
