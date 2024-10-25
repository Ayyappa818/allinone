import React from 'react'

function Boardcard({todo}) {
    // console.log(todo)
  return (
        <div class="card w-25 m-4">
            <div class="card-header">
                {todo.title}
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  )
}

export default Boardcard
