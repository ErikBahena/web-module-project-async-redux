import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Redux stuff
import reducer from "./reducers/index.js";

import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
