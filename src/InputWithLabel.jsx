import React, { useRef, useEffect } from "react";
function InputWithLabel(props){
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    });

  
    return(
        <>
         <label htmlFor="todoTitle">{props.children}</label>
<input id="todoTitle" name="title" value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef} />
        </>
       
    )


}
export default InputWithLabel;