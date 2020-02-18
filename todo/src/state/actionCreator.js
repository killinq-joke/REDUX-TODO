import * as types from "./actionTypes";
import uuid from "uuid";

export function inputChange(e) {
  const inputValue = e.target.value;
  return {
    type: types.INPUT_CHANGE,
    payload: inputValue
  };
}

export function addTodo(inputValue) {
  const newTodo = {
    id: uuid(),
    task: inputValue,
    completed: false
  };
  return {
    type: types.ADD_TODO,
    payload: newTodo
  };
}

export function markCompleted(id) {
  return {
    type: types.MARK_COMPLETED,
    payload: id
  };
}

export function clearCompleted() {
  return {
    type: types.CLEAR_COMPLETED
  };
}
