import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai"
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState(["Learn React", "war COC"])

  return (
    <div className="bg">
      <div className="container">
        <h3 className="heading">Todo App</h3>
        <form className="form">
          <input className="input" type="text" placeholder="Add Todo" />
          <button className="button">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className="count">You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;