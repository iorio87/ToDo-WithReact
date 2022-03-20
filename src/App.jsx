import { useState } from 'react'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import CreateTodoButton from './components/CreateTodoButton'



let todos = [
  { text: 'romper culos', completed: true },
  { text: 'tirar piedras', completed: false }
]

function App() {
  return (
    <>

      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem
          key = {todo.text} 
          text={todo.text}
          completed = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </>
  )
}

export default App
