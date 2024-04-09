import React, { useState, useEffect } from 'react';
import './App.css';
import AddToDoForm from './AddToDoForm';
import TodoList from './TodoList';

// Define custom hook useSemiPersistentState
const useSemiPersistentState = () => {
  // Use useState and useEffect inside the custom hook
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);
 
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  // Return state variables and setter in an array
  return [todoList, setTodoList];
};

const removeTodo = (id) =>{
 
}
function App() {
  // Use the custom hook useSemiPersistentState
  const [todoList, setTodoList] = useSemiPersistentState(); // Destructure state variables returned from the custom hook

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
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
