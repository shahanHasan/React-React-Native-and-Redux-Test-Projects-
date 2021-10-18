import React, { useState } from "react";
// short-circuit evaluation
// Definition : OR , AND and not
// in JS , logical operations are evaluated left to right.
// Or - expression is evaluated till true is read , returns the first true
// And if no true then the whole expression is evaluated and the last false is returned.
// And - if false and any then false and true and true then whole expression is
// evaluated and the last true is returned.

// ternary operator

const ShortCircuit = () => {
  // setup states
  const [text, setText] = useState("");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  const [isError, setisError] = useState(false);

  return (
    <>
      {/* <h1>Value : {firstValue}</h1> */}
      {/* <h1>Value : {secondValue}</h1> */}
      <h1>{text || "Sup ?"}</h1>
      <button className="btn" onClick={() => setisError(!isError)}>
        toogle error
      </button>
      {isError && <h1>...Error</h1>}
      {isError ? <p>There is an error</p> : <p>There is no Error</p>}
      {/* {text && <h1>Hello World</h1>}
      {!text && <h1>This is not in practice</h1>} */}
    </>
  );
};

export default ShortCircuit;
