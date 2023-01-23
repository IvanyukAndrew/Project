import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onClickTodo }) => {
    return (
        <div className='todo-list'>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} index={index} onClickTodo={onClickTodo} />
            ))}
        </div>
    )
}

export default TodoList