import React from "react";

function TodoListItem({ todo }) {
  console.log("this is todo", todo)
  
  return (
    <>
      <li id = "TodoList">{todo.title}</li>
      <button id="Pirority">Pirority??</button>
    </>
  );
}

export default TodoListItem;
