import React from "react";
import "./app.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Primary from "./primary/Primary";

const App = () => {
/*   const dispatch  = useDispatch() */


  return (
      <BrowserRouter>
        <div className="container">
        <Routes>
          <Route path="/" component={Primary}/>
          <Route exact path="/" component={Primary} />
        </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App;
