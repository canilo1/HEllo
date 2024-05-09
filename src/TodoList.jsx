import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo}) {

  // console.log("these are the props for todoList", todoList);
  return (
    <div>
      <ul>
        {todoList.map(todo => (
         <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
