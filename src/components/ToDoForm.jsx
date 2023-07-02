import { useState } from 'react';

export const ToDoForm = ({addToDo}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    //console.log(value);
    e.preventDefault();

    addToDo(value);

    setValue('');
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center w-75 mb-3">
          <input
            type="text"
            className="list-input w-100"
            placeholder="Add new list item ..."
            name="newItem"
            onChange={handleChange}
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
