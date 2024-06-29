import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';
import ContextMenu from './ContextMenu';

function TodoListItem({ todo, onRemoveTodo, onUpdateTodo }) {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.contextMenu')) {
        setShowContextMenu(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside); // Use mousedown instead of click

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRightClick = (event) => {
    event.preventDefault();
    const { pageX, pageY } = event;
    setContextMenuPosition({ x: pageX, y: pageY });
    setShowContextMenu(true);
  };

  const handlePriorityChange = (event) => {
    onUpdateTodo({ ...todo, priority: event.target.value });
  };

  const handleTagChange = (event) => {
    onUpdateTodo({ ...todo, tags: event.target.value.split(',').map(tag => tag.trim()) });
  };

  const handleDueDateChange = (event) => {
    onUpdateTodo({ ...todo, dueDate: event.target.value });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'black'; 
    }
  };

  return (
    <div id ="ListItself"
      className={styles.todoItem}
      onContextMenu={handleRightClick}
      style={{ backgroundColor: getPriorityColor(todo.priority) }}
    >
      <div className={styles.todoText}>
        <p>{todo.title}</p>
        {todo.description && <p>Description: {todo.description}</p>}
        {todo.tags.length > 0 && <p>Tags: {todo.tags.join(', ')}</p>}
        {todo.dueDate && <p>Due Date: {todo.dueDate}</p>}
        {todo.isRecurring && <p>Recurring: {todo.isRecurring ? 'Yes' : 'No'}</p>}
      </div>
      <button id="Remove" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
      {showContextMenu && (
        <ContextMenu
          x={contextMenuPosition.x}
          y={contextMenuPosition.y}
          onPriorityChange={handlePriorityChange}
          onTagChange={handleTagChange}
          onDueDateChange={handleDueDateChange}
          onClose={() => setShowContextMenu(false)}
          show={showContextMenu} // Pass show prop
        />
      )}
    </div>
  );
}

// Define propTypes
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    dueDate: PropTypes.string,
    isRecurring: PropTypes.bool
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired
};

export default TodoListItem;
