import React from 'react'

const SearchTodo = ({ value, setValue, searchTodo }) => {
    const handleValueChange = (event) => {
        setValue(event.target.value)
        searchTodo(event.target.value)
    }
    console.log(value)

    return (
        <div className='search-todo'>
            <input
                className='todo-input'
                value={value} type='text'
                onChange={(event) => handleValueChange(event)}
            />
        </div>
    )
}

export default SearchTodo