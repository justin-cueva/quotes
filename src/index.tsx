import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import "./index.css";

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

// const rootElement = document.getElementById("root");
// if (!rootElement) throw new Error("Failed to find the root element");
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
