import React from "react";
import PropTypes from 'prop-types'; // Import prop-types
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

// Define propTypes
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
