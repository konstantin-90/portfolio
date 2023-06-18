import React from "react";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "./actions";

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  removeTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
