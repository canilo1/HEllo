import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <>
      <li className="TodoList">{todo.title}</li>
      <button id="Remove" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </>
  );
}

export default TodoListItem;
