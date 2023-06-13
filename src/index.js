import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import {store} from "./reducers";
import Primary from "./components/primary/Primary";
import Result from "./components/result/Result";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <Primary/>
    <Result/>
  </Provider>
);