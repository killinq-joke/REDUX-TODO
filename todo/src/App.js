import React from "react";
import TodoList from "./Components/TodoList";
import Form from "./Components/Form";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Form />
      <TodoList />
    </div>
  );
}
