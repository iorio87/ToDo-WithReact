import { useState } from 'react'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import CreateTodoButton from './components/CreateTodoButton'



// let defaultTodos = [
//   { text: 'Escribir un libro', completed: false },
//   { text: 'Comprar pan', completed: false },
//   { text: 'Viajar a Alaska', completed: false },
//   { text: 'Plantar un arbol', completed: false },
// ]

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length === 0){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true; 
    saveTodos(newTodos);
  }

  const deleteTodo = text => {     
    const newTodos= todos.filter(todo => todo.text !== text)
    saveTodos(newTodos);
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  return (
    <>

      <TodoCounter 
      completed = {completedTodos}
      total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
          key = {todo.text} 
          text={todo.text}
          completed = {todo.completed}
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </>
  )
}

export default App
