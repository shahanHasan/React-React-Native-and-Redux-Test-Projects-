import React, { useState, useEffect } from "react";

// React hooks like useState , use Effect cannot be inside conditionals
// We can use conditionals inside react hooks call back functions

// by default runs after every re-render
// cleanup function
// second parameter
/** About Second Parameter ->
 * This is a dependency list/ Array
 * Meaning things in the component state, Data the component depends upon.
 * 1. Without second parameter use effect runs every time component rerenders.
 * 2. If second parameter is an empty list it only rerenders the first time.
 * 3. If second parameter has list with dependencies like state data, then it
 * runs every time that state or data is updated, use effect is triggered on state update.
 */

const UseEffectBasics = () => {
  //Use Effect takes in a call back function.
  //Every time we use useState . 2 Things happen
  // 1. State/Data is tracked, updated
  // 2. Component rerender is triggered. This also trigger use effect function.
  const [value, setValue] = useState(0);
  useEffect(() => {
    // Use effect is used when we wanna setup side effects
    // That is something out side of component like
    // document title, data fetching , listening for events, subscription signups etc
    console.log("use Effect");
    if (value > 1) {
      document.title = `new Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  }, []);

  console.log("This is component");

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
