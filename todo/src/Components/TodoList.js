import React from 'react';
import { connect } from "react-redux";
import Todo from './Todo';

function TodoList({ todos }) {
    return(
        <div>
            {todos.map(todo => {
                const color = todo.completed ? "green" : "red";
                return(
                    <Todo color={color} key={todo.id} todo={todo}/>
                )
            })}
        </div>

    )
}

function mapStateToProps(state) {
    return {
      todos: state.todos,
    };
  }
  export default connect(mapStateToProps, {
    
  })(TodoList);
  