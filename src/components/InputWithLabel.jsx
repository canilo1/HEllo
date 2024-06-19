import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types'; // Import prop-types

function InputWithLabel(props) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
            <input
                id="todoTitle"
                name="title"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
                ref={inputRef}
            />
        </>
    );
}

// Define propTypes
InputWithLabel.propTypes = {
    children: PropTypes.node.isRequired, 
    todoTitle: PropTypes.string.isRequired, 
    handleTitleChange: PropTypes.func.isRequired, // The handleTitleChange prop should be a function
};

export default InputWithLabel;
