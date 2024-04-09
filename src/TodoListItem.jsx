import React, { useState } from "react";

function TodoListItem({ todo }) {
  console.log("this is todo", todo)
 
  return (
    <>
    <button id = "Remove">Remove</button>
    <button id="Pirority">Pirority??</button>
      <li className = "TodoList" >{todo.title}</li>
      
    </>
  );
}

export default TodoListItem;
