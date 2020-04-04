import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import ClassComp from "./ClassComp";

function App() {
  return (
    <>
      <ClassComp />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
