import React from "react";
import { connect } from "react-redux";
import { markCompleted } from "../state/actionCreator";

function Todo({
    markCompleted,
    color,
    todo,
  }) {
    
      const onMarkCompleted = id => e => {
        markCompleted(id)
      }
    
  return (
    <button style={{ color }} onClick={onMarkCompleted(todo.id)}>
      {todo.task}
    </button>
  );
}

export default connect(null, {
  markCompleted,
})(Todo);
