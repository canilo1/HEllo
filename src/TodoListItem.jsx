import React, { useState } from "react";
 

function TodoListItem({ todo,onRemoveTodo}) {
  // console.log("This is the removefunction",onRemoveTodo)
  const [ShowButtons,setShowButtons] = useState("Hidden");
  const PirorityClick = (ShowButtons) =>{
    if(ShowButtons.display = "Hidden"){
      setShowButtons("Visible")
    }else{
      setShowButtons("Hidden")
    }
    
  }
  return (
    <>
     <li className = "TodoList" >{todo.title}</li>
    <button id = "Remove" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    <button id="Pirority"
    onClick = {PirorityClick}
    >Pirority??</button>
      <button id = "LowPirority"  className="Pirority"display={PirorityClick}></button>
      <button id = "HighPirority" className="Pirority"display={PirorityClick}></button>

    </>
  );
}

export default TodoListItem;
