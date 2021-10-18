import React, { useState } from "react";

// UseState takes 2 param. returns an array of value and control func/
// 1. The parameter to be passed. The default value of the data.
// 2. The function that controls that param/state/data
// 3. Component name must be upper case to use react functions, 
// 4. React built in functions must be inside function/Component.

const UseStateBasics = () => {
  // console.log(useState("Hello"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value);
  // console.log(handler);
  // Array destructuring
  // React hook , inside component.
  const [text, setText] = useState("random title");
  const handler = () => {
    if (text === "random title") {
      setText("random title new");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handler}>
        Changetext
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
