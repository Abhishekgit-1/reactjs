import React from "react";
import ReactDOM from "react-dom/client";
   
// const heading = React.createElement("h1",
//     { id : "heading"}
//     ,"this is jaurney of react js"
//  );
// console.log(heading);
//  const JSXheading = (<div id="heading" className="btn">this is the jaurney of ReactJS with JSX </div>);
// Fuctinal component is a func
// const Title = () => (
//     <h1 id="head" className="heading">
//     Start you work with JS
//     </h1>
//     );
 var number = 1000 * 2;
// const Title = function () {
//     return (<h1 id="head" className="heading">
//     Start you work with JS  {number}
//     </h1>);
//     };

const abc = (<><span>inside the element:</span><br /></>);
const title = (
    <h1 id="head" className="heading">
    {abc}   
    Start you work with JS
    </h1>
    );
 const FunctionComponet = () => (<div id="div" className="divite">
    
    {/*  component compsition */}
    {title}
    {/* <Title/>  */}
    <h1 id="heading" className="heading11">this is react js Function Componet class</h1>
 </div>);

 //console.log(JSXheading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionComponet/>);