import React from "react";
import "./app.scss";
import Primary from "./primary/Primary";
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Primary/>
    </>
  );
};

export default App;
