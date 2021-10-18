import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const CountIncrease = () => {
    let currentCount = count + 1;
    setCount(currentCount);
  };
  const CountDecrease = () => {
    let currentCount = count - 1;
    setCount(currentCount);
  };
  const Countreset = () => {
    setCount(0);
  };
  const ComplexCountIncrease = () => {
    // Purpose : Functional Update form ,
    // Why use it, Keeps track of previous state as prevState / or any name.
    // essentially adding a timeout function,

    // A set time out function takes 2 parameters ,
    // 1. A call back function ,
    // 2. time , 2000 = 2 seconds. see below
    // setTimeout(() => { }, 2000)
    setTimeout(() => {
      // Here setState functions always take previous State as parameter, Default arguments.
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="btn" onClick={CountDecrease}>
          Decrement
        </button>
        <button className="btn" onClick={Countreset}>
          Reset
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={ComplexCountIncrease}>
          Complex Increment
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
