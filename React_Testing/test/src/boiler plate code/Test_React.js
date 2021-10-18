//import react
import React from "react";
import ReactDOM from "react-dom";

//Since index js is the entry point of javascript from html, we need more code
//to render additional jsx in index.html

// Stateless Functional Component
// Always return JSX

// //Some Function to render in a specific place / The component
// function First_Page() {
//   //return HTML , Officially JSX
//   return <h4>My First React Component.</h4>;
// }

// function First_Page() {
//   return (
//     <div>
//       <p>My First React Component.</p>
//     </div>
//   );
// }

//What is running Under the hood.
const First_Page = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "My First React Component.")
  );
};

//Use React DOM to render some function in a specific place
ReactDOM.render(<First_Page />, document.getElementById("root"));
