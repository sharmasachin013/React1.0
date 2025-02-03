import useState from "react";
import AddTodo from "./AddTodo";

function ToDoList(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;
  return (
    <div className="app-container">
      ToDoList
      <AddTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default ToDoList;
