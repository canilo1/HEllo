import { useState } from 'react'
import './App.css'
import AddToDoForm from './AddToDoForm'
import TodoList from './TodoList'

function App() {
   const[todolist,setTodoList] = useState([]);

   const addTodo = (newtodo) =>{
    if(newtodo.title == ""){
      console.log("This is a empty array")
      newtodo = []
    }else{
      setTodoList([...todolist,newtodo])
    }
    
   }
  
    return (
    <>
      <h1>Todo List</h1>
      <AddToDoForm onAddTodo = {addTodo}></AddToDoForm>
    <TodoList todoList={todolist} />
    </>
  )
}

export default App
