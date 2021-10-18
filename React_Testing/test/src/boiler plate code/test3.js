import React from "react";
import ReactDOM from "react-dom";

//CSS
//import CSS
import "./index.css";

function BookList() {
  return (
    <section className="Booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

//Explicit
const Book = () => {
  return (
    <article className="Book">
      <BookTite />
      <Image />
      <Author />
      <BookDesc />
    </article>
  );
};

const BookDesc = () => {
  return <h2>This is a Book</h2>;
};

//Implicit
const Image = () => (
  <img
    src="https://encrypted.google.com/books?id=fO9BribjEcQC&printsec=frontcover&img=1&zoom=5&edge=curl&h=132&w=100"
    alt="This is a book image."
  />
);

const BookTite = () => {
  return <h1>Programming Concepts.</h1>;
};
// Inline CSS in JSX
// Inline CSS overrides file.CSS even in JSX
const Author = () => <h2 style={{color : 'black', fontSize: '0.75rem', marginTop: '0.25rem'}}>Amelia Hemworth</h2>;

ReactDOM.render(<BookList />, document.getElementById("root"));
