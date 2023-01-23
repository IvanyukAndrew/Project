import React from 'react'

const CreateTodo = ({ value, setValue, createTodo }) => {
    const handleValueChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='create-todo'>
            <input
                className='todo-input'
                value={value} type='text'
                onChange={(event) => handleValueChange(event)}
            />
            <button className='create-button' onClick={() => createTodo(value)}>Створити</button>
        </div>
    )
}

export default CreateTodo