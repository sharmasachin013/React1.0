import { useState } from "react";
import AddTodo from "./AddTodo";

function ToDoList(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;
  // const { todos, setTodos } = props;
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  console.log(props);

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todos, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  const startEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      ToDoList
      <AddTodo todos={todos} setTodos={setTodos} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed todo-item" : "todo-item"}
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  editId={editId}
                />
                <button onClick={updateTodo} className="save-btn">
                  Save
                </button>
              </>
            ) : (
              <>
                <span onClick={() => toggleStatus(todo.id)}>{todo.text}</span>
                <button
                  className="edit-btn"
                  onClick={() => startEditTodo(todo.id, todo.text)}
                  value={editText}
                >
                  Edit
                </button>
                <button
                  className="edit-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
