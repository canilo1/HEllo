import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const todoList = [id = 1,title = "Complete assignment"];
function App() {

  return (
    <>
    <h1>Todo List</h1>
    {todoList.map(todo => (
    <li key={todo.id}>{todo.title}</li>
  ))}
    </>
  )
}

export default App
