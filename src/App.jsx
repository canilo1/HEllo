import React, { useState, useEffect } from 'react';
import './App.css';
import AddToDoForm from './AddToDoForm';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const token = import.meta.env.VITE_AIRTABLE_API_TOKEN;
    const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
    const tableName = import.meta.env.VITE_TABLE_NAME;
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const options = {
      headers:{Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`}
    }
    try {

      const response = await fetch(url, {
        method:"GET",
        headers:{"Authorization":`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`}
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data from Airtable API:", data);

      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id
      }));
      console.log("Transformed todos:", todos);

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const removeTodo = (id) => {
    const filteredTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(filteredTodoList);
  };

  const addTodo = (newTodo) => {
    if (newTodo.title.trim() === "") {
      console.log("This is an empty todo item");
      return;
    }
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddToDoForm onAddTodo={addTodo} />
      {isLoading ? (<p>Loading..</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
    </>
  );
}

export default App;
