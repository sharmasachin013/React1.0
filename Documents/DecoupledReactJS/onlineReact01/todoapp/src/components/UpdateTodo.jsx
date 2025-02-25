import { useState } from "react";

function UpdateTodo(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const editText = props.editText;
  const setEditText = props.setEditText;
  const editId = props.editId;
  const setEditId = props.setEditId;

  const updatetodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );

    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={updatetodo} className="save-btn"></button>
    </>
  );
}

export default UpdateTodo;
