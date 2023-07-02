export const ToDoItem = ({task, toggleComplete, deleteToDo}) => {
    return (
        <div onClick={() => toggleComplete(task.id)} className={`${task.completed ? `completed tdl-item`: `tdl-item`}`} >
            <p>{task.task}</p>
            <div>
                <i className="bi bi-pencil-square"></i>
                <i onClick={() => deleteToDo(task.id)} className="bi bi-trash"></i>
            </div>
        </div>
    )
}