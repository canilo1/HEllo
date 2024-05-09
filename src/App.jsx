import React, { useState, useEffect } from 'react';
import './App.css';
import AddToDoForm from './AddToDoForm';
import TodoList from './TodoList';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
console.log("This iss loading",isLoading)
  useEffect(()=>{
    const todoListStorage =  JSON.parse(localStorage.getItem("savedTodoList"))
    new Promise((resolve,reject) =>{
      setTimeout(()=> resolve({data:{todoListStorage}}))
     },2000).then((result) => {
      setTodoList(result.data.todoListStorage)},
      setIsLoading(false)
    ) 
  },[])
  useEffect(() => {
    if(isLoading == false){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);
  const removeTodo = (id) =>{
    const FilteredTodoList = todoList.filter((todoObject) => todoObject.id !== id)
     setTodoList( FilteredTodoList)
  }
  const addTodo = (newTodo) => {
    if (newTodo.title.trim() === "") {
      console.log("This is an empty todo item");
      return; // Don't add empty todo items
    }
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddToDoForm onAddTodo={addTodo} />
      {isLoading?(<p>Loading..</p>):(<TodoList todoList={todoList}  onRemoveTodo ={removeTodo} />)}
    </>
  );
}

export default App;
