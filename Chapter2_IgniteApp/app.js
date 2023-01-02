import React from "react";
import ReactDOM from "react-dom";




const heading = React.createElement ("h1",{ id : "heading",class:"headingClass"},"Heading 1");
const heading1 = React.createElement("h2", {id: "heading1", class:"headingClass"}, "Heading 2");

const divHeading = React.createElement(
    "div",
    {
        id:"divheading"
    },
    [heading, heading1]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(divHeading);


