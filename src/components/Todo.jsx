import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className={todo.is_completed ? "li-complete" : "li"}>
            <div className="row">
                <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.is_completed ? "checked" : ""} />
                <p onClick={() => toggleComplete(todo)} className={todo.is_completed ? "text-complete" : "text"}>{todo.text}</p>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
        </li>
    )
}

export default Todo