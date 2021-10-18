import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const sizeUpdate = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // Every time setup a side effect also set up a clean up function
    // console.log("use effect");
    window.addEventListener("resize", sizeUpdate);
    return () => {
      // console.log("clean up");
      window.removeEventListener("resize", sizeUpdate);
    };
  }, [size]);
  // console.log("render");
  return (
    <>
      <h1>Window Size : {size}</h1>
    </>
  );
};

export default UseEffectCleanup;
