import React from "react";
import ReactDOM from "react-dom";

//CSS
//import CSS
import "./index.css";

//Js Objects
//  Each child in a list should have a unique "key" prop.
const books = [
  {
    id: 1,
    title: "Programming Concepts.",
    Author: "Amelia Hemworth",
    Desc: "This is a Book",
    img_src:
      "https://encrypted.google.com/books?id=fO9BribjEcQC&printsec=frontcover&img=1&zoom=5&edge=curl&h=132&w=100",
    img_alt: "This is a book image.",
  },
  {
    id: 2,
    title: "Programming Concepts.",
    Author: "Amelia Hemworth",
    Desc: "This is a Book",
    img_src:
      "https://encrypted.google.com/books?id=fO9BribjEcQC&printsec=frontcover&img=1&zoom=5&edge=curl&h=132&w=100",
    img_alt: "This is a book image.",
  },
  {
    id: 3,
    title: "Programming Concepts.",
    Author: "Amelia Hemworth",
    Desc: "This is a Book",
    img_src:
      "https://encrypted.google.com/books?id=fO9BribjEcQC&printsec=frontcover&img=1&zoom=5&edge=curl&h=132&w=100",
    img_alt: "This is a book image.",
  },
  {
    id: 4,
    title: "Programming Concepts.",
    Author: "Amelia Hemworth",
    Desc: "This is a Book",
    img_src:
      "https://encrypted.google.com/books?id=fO9BribjEcQC&printsec=frontcover&img=1&zoom=5&edge=curl&h=132&w=100",
    img_alt: "This is a book image.",
  },
];

const words = ["abc", "def", "ghi"];

//Call back function , wordview is an array
const wordview = words.map((word) => {
  return <h1>{word}</h1>;
});

//This is the rendering function
function BookList() {
  return (
    <section className="Booklist">
      {books.map((book, index) => {
        // Properties , parameters destructure.
        // const { title, Author, Desc, img_src, img_alt } = book;

        //  Each child in a list should have a unique "key" prop.
        // Traditional return method with pasing complete object to component
        // return <Book key={book.id} book={book} />;
        //Spread operator method.
        // here ...book basically spreads all the properties of book object and passes them
        // to component
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

//Explicit
//default convention for properties or parameters.

const Book = (props) => {
  // setup vars , can be global

  //props destructuring
  //use below if you pass object to component.
  //const { title, Author, Desc, img_src, img_alt } = props.book;

  //use traditional props only for spread operator like below :
  const { title, Author, Desc, img_src, img_alt } = props;

  //console.log(props); in js
  return (
    <article className="Book">
      <h1>{title}</h1>
      <img src={img_src} alt={img_alt} />
      <h2>{Author.toUpperCase()}</h2>
      <h2>{Desc}</h2>
      {/* <p>{children}</p> */}
      {/*console.log(props) in jsx */}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
