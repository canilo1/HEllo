import React, { useState } from 'react';

function AlphabetOrder(todoListArray) {
  const letterToNumber = {
    "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 10,
    "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, "R": 18, "S": 19,
    "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26
  };

  return todoListArray.sort((a, b) => {
    const currentTitle = a.title.toUpperCase();
    const previousTitle = b.title.toUpperCase();

    const currentFirstLetter = currentTitle[0];
    const previousFirstLetter = previousTitle[0];

    const currentLetterValue = letterToNumber[currentFirstLetter];
    const previousLetterValue = letterToNumber[previousFirstLetter];

    if (currentLetterValue && previousLetterValue) {
      if (currentLetterValue > previousLetterValue) {
        return 1;
      } else if (currentLetterValue < previousLetterValue) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  });
}

function PriorityOrder(todoListArray) {
  return todoListArray.sort((a, b) => {
    if (a.priority > b.priority) {
      return -1; // Higher priority tasks come first
    } else if (a.priority < b.priority) {
      return 1; // Lower priority tasks come last
    } else {
      return 0; // Same priority
    }
  });
}

function DueDateOrder(todoListArray) {
  return todoListArray.sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);

    if (dateA < dateB) {
      return -1; // Earlier due dates come first
    } else if (dateA > dateB) {
      return 1; // Later due dates come last
    } else {
      return 0; // Same due date
    }
  });
}

function Sort({ todoListArray, setTodoList }) {
  const [isActive, setIsActive] = useState(false);

  function handleSortingMode(mode) {
    let sortedArray;
    if (mode === "AlphabetOrder") {
      sortedArray = AlphabetOrder(todoListArray);
    } else if (mode === "PriorityOrder") {
      sortedArray = PriorityOrder(todoListArray);
    } else if (mode === "DueDateOrder") {
      sortedArray = DueDateOrder(todoListArray);
    }
    setTodoList([...sortedArray]);
  }

  function removeAll() {
    setTodoList([]);
  }

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button id="Sort" onClick={toggleIsActive}>Sort</button>
      {isActive && (
        <div>
          <button id="AlphabetOrder" onClick={() => handleSortingMode("AlphabetOrder")}>Alphabet Order</button>
          <button id="PriorityOrder" onClick={() => handleSortingMode("PriorityOrder")}>Priority Order</button>
          <button id="DueDateOrder" onClick={() => handleSortingMode("DueDateOrder")}>Due Date Order</button>
          <button id="RemoveAll" onClick={removeAll}>Remove All</button>
        </div>
      )}
    </>
  );
}

export default Sort;
