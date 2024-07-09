import React from 'react';

function ContextMenu({ x, y, onPriorityChange, onTagChange, onDueDateChange, onClose, show }) {
  return (
    <div 
      className={`contextMenu ${show ? 'show' : ''}`} 
      style={{ 
        top: y, 
        left: x
      }}
    >
      <label>
        Priority:
        <select onChange={onPriorityChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <br />
      <label>
        Tags:
        <input type="text" onChange={onTagChange} placeholder="Comma separated" />
      </label>
      <br />
      <label>
        Due Date:
        <input type="date" onChange={onDueDateChange} />
      </label>
      <br />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ContextMenu;
