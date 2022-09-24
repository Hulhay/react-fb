import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai"
import Todo from "./components/Todo";
import { db } from "./firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  // create todo
  const createTodo = async (e) => {
    e.preventDefault(e)
    if (input === "") {
      alert("Please enter a valid todo")
      return
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      is_completed: false,
    })
    setInput("")
  }

  // get todo
  useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsubscibre = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      });
      setTodos(todosArr)
    })
    return () => unsubscibre()
  }, [])

  // update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      is_completed: !todo.is_completed
    })
  }

  // delet todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id))
  }

  return (
    <div className="bg">
      <div className="container">
        <h3 className="heading">Todo App</h3>
        <form onSubmit={createTodo} className="form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
            type="text"
            placeholder="Add Todo"
          />
          <button className="button">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </ul>
        {
          todos.length < 1
            ? null
            : todos.length === 1
              ? <p className="count">{"You have 1 todo"}</p>
              : <p className="count">{`You have ${todos.length} todos`}</p>
        }
      </div>
    </div>
  );
}

export default App;