import * as types from "./actionTypes";

const initialStateForm = "";
export function formReducer(state = initialStateForm, action) {
    switch(action.type) {
        case types.INPUT_CHANGE:
            return action.payload; 
        case types.ADD_TODO:
            return initialStateForm; //refresh
        default:
            return state;
    }
}

const initialStateTodos = [];
export function todosReducer(state = initialStateTodos, action) {
    switch(action.type) {
        case types.ADD_TODO:
            const newTodo = action.payload;
            if(newTodo.task === '') {
                return state
            }
            return state.concat(newTodo);
        case types.MARK_COMPLETED:
            const id = action.payload;
            return state.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        case types.CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);
        default:
            return state;
    }
}