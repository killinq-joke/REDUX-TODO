import React from "react";
import { connect } from "react-redux";
import { inputChange, addTodo, clearCompleted } from "./state/actionCreator";
import TodoList from "./Components/TodoList";
import "./App.css";

function App({ formValues, inputChange, addTodo, clearCompleted }) {
  const onChange = e => {
    inputChange(e);
  };
  const onAddTodo = e => {
    addTodo(formValues);
  };
  const onClearCompleted = e => {
    clearCompleted();
  };

  return (
    <div className="App">
      <form>
        <input onChange={e => onChange(e)} value={formValues}></input>
        <button type="button" onClick={onAddTodo}>
          ADD
        </button>
        <button type="button" onClick={onClearCompleted}>
          CLEAR
        </button>
      </form>
      <TodoList />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    formValues: state.formValues
  };
}
export default connect(mapStateToProps, {
  inputChange,
  addTodo,
  clearCompleted
})(App);
