import React from "react";

const Todo = ({ todo, index, onClickTodo }) => {
    return (
        <div className='todo'>
            <p><span>{index + 1}.</span> {todo.text}</p>
            <button onClick={() => onClickTodo(todo.id)}>x</button>
        </div>
    )
}

export default Todo