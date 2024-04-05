import React, { useState } from "react";

function AddToDoForm({ onAddTodo }) {

    const [todoTitle, setTodoTitle] = useState("");
    const [visibility, setVisibility] = useState(0.5); // Changed to 0.5
    const [TheColor,setColor] = useState([]);
    const[Size, ChangeSize] = useState();
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now()
        };
        onAddTodo(newTodo);
        setTodoTitle('');
    }

    const toggleOpacityAnimation = () => {
        setVisibility(1); // Setting opacity to 1
    };

    const mouseLeft = () => {
        setVisibility(0.5); // Setting opacity back to 0.5
    };
    const RightChange = () => {
        console.log("i right clickedd!");
        const color1 = Math.ceil(Math.random() * 255);
        const color2 = Math.ceil(Math.random() * 255);
        const color3 = Math.ceil(Math.random() * 255);
        console.log("these are the colors", color1, color2, color3);
        const ColorValue = `rgb(${color1},${color2},${color3})`; 
        setColor(ColorValue);
    }
     
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} />
            {/* Apply inline style for opacity */}
            <button 
                onMouseEnter={toggleOpacityAnimation} 
                onMouseLeave={mouseLeft} 
                className="fadeincontainer"
                style={{ opacity: visibility ,color:TheColor}} 
                onContextMenu={RightChange}
              
            >
                Add
            </button>
        </form>
    );
}

export default AddToDoForm;
