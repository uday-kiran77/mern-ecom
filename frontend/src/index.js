import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import axios from "axios";
import { SERVER_BASE_URL } from "./utils/constants";

axios.defaults.baseURL = SERVER_BASE_URL;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
