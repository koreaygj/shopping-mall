import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("store", store);
  console.log("action", action);
  next(action);
};

const middleware = applyMiddleware(thunk, loggerMiddleware);

const store = createStore(rootReducer, middleware);

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

render();

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
