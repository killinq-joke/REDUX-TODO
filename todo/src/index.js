import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { todosReducer, formReducer } from "./state/reducers";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const combinedReducer = combineReducers({
  todos: todosReducer,
  formValues: formReducer
});

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
