import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
const todoList = [id = 1,title = "Complete assignment"];
function App() {
  const[newTodo, setNewTodo] = useState();
  return (
    <>
 
    <h1>Todo List</h1>
    <AddToDoForm onAddTodo = {setNewTodo}></AddToDoForm>
    <p>{newTodo}</p>
    <TodoList />
    </>
  )
}

export default App;
