import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import {store} from "./reducers";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Result from "./components/result/Result";
import {Error} from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/"       Component={App}/>
          <Route path="/result" Component={Result}/>
{/*           <Route path="/error" Component={Error}/> */}
        </Routes>
      </Router>
  </Provider>

);