import React from "react";

//Explicit
//default convention for properties or parameters.

const Book = (props) => {
  // setup vars , can be global

  //props destructuring
  //use below if you pass object to component.
  //const { title, Author, Desc, img_src, img_alt } = props.book;

  //use traditional props only for spread operator like below :
  const { title, Author, Desc, img_src, img_alt } = props;
  // Nested functions with event handlers.
  const onclickHandler = (e) => {
    alert(e.type);
    console.log(e);
    console.log(e.target);
  };

  function eventHandle(e) {
    alert(e);
  }
  const complexFunctionWithParam = (props) => {
    console.log(props);
  };

  //console.log(props); in js
  return (
    <article
      className="Book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <h1 onClick={() => alert("This is title")}>{title}</h1>
      <img src={img_src} alt={img_alt} />
      <h2>{Author.toUpperCase()}</h2>
      <h2>{Desc}</h2>
      {/* <p>{children}</p> */}
      {/*console.log(props) in jsx */}
      <button type="button" onClick={eventHandle}>
        My Button
      </button>
      <button type="button" onClick={() => complexFunctionWithParam}>
        Complex Button
      </button>
    </article>
  );
};

export default Book;
