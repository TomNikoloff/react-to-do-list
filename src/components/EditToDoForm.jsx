import { useState } from 'react';

export const EditToDoForm = ({editToDo, todo}) => {
  const [value, setValue] = useState(todo.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    //console.log(value);
    e.preventDefault();

    editToDo(value, todo.id);

    setValue('');
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center w-75 mb-3">
          <input
            type="text"
            className="list-input w-100"
            placeholder="Update task"
            name="newItem"
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
    </>
  );
};