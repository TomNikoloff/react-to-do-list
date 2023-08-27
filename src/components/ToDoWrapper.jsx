import { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDoItem } from './ToDoItem';
import { v4 as uuidv4 } from 'uuid';
import { EditToDoForm } from './EditToDoForm';
uuidv4();

export default function ToDoWrapper() {
  const [todos, setToDos] = useState([]);

  const addToDo = todo => {
    setToDos([...todos, { id: uuidv4(), task: todo,
     completed: false, isEditing: false }]);
  };

  const toggleComplete = id => {
    setToDos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteToDo = id => {
    setToDos(todos.filter(todo => todo.id !== id))
  }

  const editToDo = id => {
    setToDos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing } : todo ))
  }

  const editTask = (task, id) => {
    setToDos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing } : todo))
  }

  return (
    <>
      <div className=''>
        <h1 className="text-white text-center">To-Do List</h1>
        <div className="text-center mt-3">
          <p className="text-white">
            Enter text into the input field to{' '}
            <span className="tdl-add-items">add items</span> to your list. Max
            length 60 characters.
          </p>
          <p className="text-white">
            Click on any list item to mark as{' '}
            <span className="strike-through">
              <span className="tdl-complete">complete</span>
            </span>.
          </p>
          <p className="text-white">
            Click on the
            {' '}
            <span>
              <i className="bi bi-pencil-square"></i>
            </span>
            {' '}
            to edit or on the
            {' '}
            <span>
              <i className="bi bi-trash"></i>
            </span>
            {' '}
            to remove an item from the list.
          </p>
        </div>
      </div>
      <ToDoForm addToDo={addToDo} />
      <div className='tdl-items-container'>
        <div>
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditToDoForm editTask={editTask} todo={todo} key={todo.id} />
          ) : (
            <ToDoItem todo={todo} key={todo.id} deleteToDo={deleteToDo} toggleComplete={toggleComplete} editToDo={editToDo}/>
          )
        ))}
        </div>        
      </div>
    </>
  );
}
