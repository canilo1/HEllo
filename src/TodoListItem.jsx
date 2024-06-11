import React from "react";
import styles from './TodoListItem.module.css';
function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <div className={styles.todoItem}>
      <li className={styles.todoText}>{todo.title}</li> 
      <button id="Remove" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </div>
  );
}

export default TodoListItem;
