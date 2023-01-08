import React from "react";
import ReactDOM  from "react-dom/client";

const header1 = <h1>REACT HEADER</h1>

const Header2 = () => (
 <h1>Functional component</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Log file");

root.render(<Header2/>);