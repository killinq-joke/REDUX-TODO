import React from "react";
import { connect } from "react-redux";
import {
  inputChange,
  addTodo,
  markCompleted,
  clearCompleted
} from "./state/actionCreator";
import "./App.css";

function App({
  // PROPS COME IN SEVERAL FLAVORS:
  // A- data from redux state
  todos,
  formValues,
  // B- callbacks to change state (action creators)
  inputChange,
  addTodo,
  markCompleted,
  clearCompleted
  // C- props actually injected by the parent component
}) {
  const onChange = e => {
    inputChange(e)
  }
  const onAddTodo = e => {
    addTodo(formValues)
  }
  const onMarkCompleted = id => e => {
    markCompleted(id)
  }
  const onClearCompleted = e => {
    clearCompleted()
  }

  return (
    <div className="App">
      <form>
        <input onChange={e => onChange(e)} value={formValues}></input>
        <button type="button" onClick={onAddTodo}>ADD</button>
        <button type="button" onClick={onClearCompleted}>CLEAR</button>
      </form>
      {todos.map(todo => {
        const color = todo.completed ? "green" : "red";
        return(
          <button key={todo.id} style={{color}} onClick={onMarkCompleted(todo.id)}>{todo.task}</button>
        )
      })}
    </div>
  )
  
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
  markCompleted,
  clearCompleted
})(App);
