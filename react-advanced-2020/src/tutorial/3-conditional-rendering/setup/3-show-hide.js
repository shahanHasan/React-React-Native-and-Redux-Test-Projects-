import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [isShow, setShow] = useState(false);
  return (
    <>
      {isShow && <Item />}
      <button className="btn" onClick={() => setShow(!isShow)}>
        toggle Component
      </button>
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);
  return (
    <div>
      <h1>Window </h1>
      <h2>Size : {size}</h2>
    </div>
  );
};

export default ShowHide;
