import React, { useEffect, useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import SearchTodo from './components/SearchTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Купити хліб', done: false },
    { id: 2, text: 'Купими масла', done: false },
    { id: 3, text: 'Зробити домашнє завдання', done: false },
  ])
  const [createInput, setCreateInput] = useState('')
  const [searchInput, setSearchInput] = useState('')

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const createTodo = (value) => {
    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
    }

    setTodos([...todos, newTodo])
    setCreateInput('')
  }

  const filterTodo = (filterStr) => {
    if (!filterStr) {
      return todos
    }

    return todos.filter(({ text }) => (
      text.toLowerCase().includes(filterStr.toLowerCase())
    ))
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='content'>
          <h1>Todo list!</h1>

          <div className='search-create--input'>
            <CreateTodo value={createInput} setValue={setCreateInput} createTodo={createTodo} />
            <SearchTodo value={searchInput} setValue={setSearchInput} searchTodo={filterTodo} />
          </div>

          {todos.length ? <TodoList todos={filterTodo} onClickTodo={removeTodo} /> : <h2>Todo немає</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
