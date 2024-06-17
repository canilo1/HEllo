import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo, onMouseDown, onMouseUp }) {
  console.log(onMouseDown, onMouseUp);
  // console.log("these are the props for todoList", todoList);
  return (
    <div id="StorageList">
      <ul>
        {todoList.map(todo => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}

// Define propTypes
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
};

export default TodoList;
