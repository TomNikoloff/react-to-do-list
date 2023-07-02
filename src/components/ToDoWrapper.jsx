import { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDoItem } from './ToDoItem';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function ToDoWrapper() {
  const [todos, setToDos] = useState([]);

  const addToDo = todo => {
    setToDos([...todos, { id: uuidv4, task: todo,
     completed: false, isEditing: false }]);
    console.log(todos);
  };

  const toggleComplete = id => {
    setToDos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteToDo = id => {
    setToDos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <h1 className="text-white text-center">To-Do List</h1>
      <div className="text-center mt-3">
        <p className="text-white">
          Enter text into the input field to{' '}
          <span className="tdl-add-items">add items</span> to your list. Max
          length 60 characters
        </p>
        <p className="text-white">
          Click the new list items to mark as{' '}
          <span className="tdl-complete">complete</span>.
        </p>
        <p className="text-white">
          Click the{' '}
          <span>
            <i className="bi bi-x-square close-symbol"></i>
          </span>{' '}
          to remove an item from the list.
        </p>
      </div>
      <ToDoForm addToDo={addToDo} />
      <div className='tdl-items-container'>
        <div>
        {todos.map((todo, index) => (
            <ToDoItem task={todo} key={index} toggleComplete={toggleComplete} deleteToDo={deleteToDo} />
          ))}
        </div>        
      </div>
    </>
  );
}
