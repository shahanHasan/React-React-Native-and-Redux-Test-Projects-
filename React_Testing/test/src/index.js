import React from "react";
import ReactDOM from "react-dom";

//import other js files
import { books } from "./Books";
import Book from "./Book";
//CSS
//import CSS
import "./index.css";

//Attributes and events : onClick, onMouseOver

//Js Objects
//  Each child in a list should have a unique "key" prop.

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

ReactDOM.render(<BookList />, document.getElementById("root"));
