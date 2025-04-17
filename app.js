import React from "react";
import ReactDOM from "react-dom/client";
   

//** 
// <div id="parent">
//      <div id="child1">
//          <h1>I am heading</h1>
//          <h2>I am h2 tag</h2>
//      </div>
//      <div id="child2">
//          <h1>I am heading</h1>
//          <h2>I am h2 tag</h2>
//      </div>
// </div>
//  */

const parent = React.createElement("div", 
    {id: "parent"},
     [React.createElement(
        "div", 
        {id: "child1", key: "child12"},
        [React.createElement("h1", { id: "h1", key :"1"}, "I am h1 tag  test"),
        React.createElement("h2", { id: "h2", key :"2"}, "I am h2 tag"),
        React.createElement("h3", { id: "h3",  key :"3"}, "I am h3 tag")]
    ),React.createElement(
        "div", 
        {id: "child2", key: "child13"},
        [React.createElement("h1", { id: "h4", key :"4"}, "I am h1 tag"),
        React.createElement("h2", { id: "h5", key :"5"}, "I am h2 tag"),
        React.createElement("h3", { id: "h6", key :"6"}, "I am h3 tag")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);