export const ToDoItem = ({todo, deleteToDo, toggleComplete,  editToDo}) => {
    return (
        <div className="position-relative">
            <div onClick={() => toggleComplete(todo.id)} className={"tdl-item " + `${todo.completed ? `completed`: ``}`} >
                <p className="tdl-item-text">
                    <span>{todo.task}</span>
                </p>
            </div>
            <div className="tdl-item-icons">
                <i onClick={() => editToDo(todo.id)} className="bi bi-pencil-square"></i>
                <i onClick={() => deleteToDo(todo.id)} className="bi bi-trash"></i>
            </div>
        </div>
    )
}