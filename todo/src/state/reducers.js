import * as types from "./actionTypes";

const initialStateForm = "";
export function formReducer(state = initialStateForm, action) {
    switch(action.type) {
        case types.INPUT_CHANGE:
            return state; 
        case types.MARK_COMPLETED:
            return state; //refresh
        default:
            return state;
    }
}

const initialStateTodos = [];
export function todosReducer(state = initialStateTodos, action) {
    switch(action.type) {
        case types.ADD_TODO:
            return state;
        case types.MARK_COMPLETED:
            return state;
        case types.CLEAR_COMPLETED:
            return state;
        default:
            return state;
    }
}