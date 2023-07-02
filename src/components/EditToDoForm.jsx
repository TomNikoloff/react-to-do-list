import { useState } from 'react';

export const EditToDoForm = ({editTask, todo}) => {
  const [value, setValue] = useState(todo.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const saveChanges = (e) => {
    //console.log(value);
    e.preventDefault();

    editTask(value, todo.id);

    setValue('');
  };

  const cancelEdit = (e) => {

    e.preventDefault();

    editTask(todo.task, todo.id);

    setValue('');
  }

  return (
    <>
      <div className="position-relative">
          <div className={`${todo.completed ? `completed tdl-item`: `tdl-item`}`} >
          <input
            type="text"
            className="list-input w-100"
            placeholder="Update task"
            name="updateItem"
            maxLength="60"
            onChange={handleChange}
            value={value}
          />
          </div>
          <div className="tdl-item-icons editable">
              <i onClick={saveChanges} className="bi bi-check"></i>
              <i onClick={cancelEdit} className="bi bi-x"></i>
          </div>
      </div>
      {/*
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center w-100 mb-3">
          <input
            type="text"
            className="list-input w-100"
            placeholder="Update task"
            name="newItem"
            maxLength="60"
            onChange={handleChange}
            value={value}
          />
          <div className="">
            <button
              id="add_btn"
              className="btn close-button"
              type="button"
              onClick={handleClick}
            >
              <i className="bi bi-clipboard2-plus"></i>
            </button>
          </div>
        </div>
      </div>
      */}
    </>
  );
};