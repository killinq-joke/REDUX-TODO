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
            return state.concat(newTodo);
        case types.MARK_COMPLETED:
            return state;
        case types.CLEAR_COMPLETED:
            return state.filter(state => state.completed === false);
        default:
            return state;
    }
}