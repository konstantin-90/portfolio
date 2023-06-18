import { useState } from "react";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, { name: todo, status: 'not-done', id: Date.now()}]);
      setTodo("");
    }
  };

  const handleRemove = (item) => {
    const newTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(newTodos);
  };

  const handleToggle = (item) => {
    const newTodos = todos.map((todo) => 
      todo.id === item.id 
        ? {...todo, status: todo.status === "done" ? "not-done" : "done"} 
        : todo
        );
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>React Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} onRemove={handleRemove} onToggle={handleToggle}/>
    </div>
  );
};

export default App;