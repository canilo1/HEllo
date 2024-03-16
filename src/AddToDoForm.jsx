import React from "react";
import React, { useState } from 'react';
function AddToDoForm(props){
    const handleAddTodo = (event) => {
        event.preventDefault();
        props.onAddTodo(todoTitle);
        const todoTitle = event.target.elements.title.value;
        console.log("this is the todoTitle", todoTitle);
        event.target.reset();
    }
    
    return(
        <form onSubmit = {handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
        <input id = "todoTitle" name = "title"/>
        <button>Add</button>
        </form>
    );

}
export default AddToDoForm;