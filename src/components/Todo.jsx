import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const Todo = ({ todo }) => {
    return (
        <li className="li">
            <div className="row">
                <input type="checkbox" />
                <p className="text">{todo}</p>
            </div>
            <button>{<FaRegTrashAlt />}</button>
        </li>
    )
}

export default Todo