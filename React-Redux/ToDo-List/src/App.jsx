import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className='app-container'>
      <h1>Todo List with Redux Toolkit</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
