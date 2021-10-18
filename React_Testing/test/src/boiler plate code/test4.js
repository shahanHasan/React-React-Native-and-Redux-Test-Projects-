import React from "react";
import ReactDOM from "react-dom";

//CSS
//import CSS
import "./index.css";

//Js Objects
const firstBook = {
  title: "Programming Concepts.",
  Author: "Amelia Hemworth",
  Desc: "This is a Book",
  img_src:
    "https://encrypted.google.com/books?id=fO9BribjEcQC&printsec=frontcover&img=1&zoom=5&edge=curl&h=132&w=100",
  img_alt: "This is a book image.",
};

const secondBook = {
  title: "Programming Concepts.",
  Author: "Amelia Hemworth",
  Desc: "This is a Book",
  img_src:
    "https://encrypted.google.com/books?id=fO9BribjEcQC&printsec=frontcover&img=1&zoom=5&edge=curl&h=132&w=100",
  img_alt: "This is a book image.",
};

//This is the rendering function
function BookList() {
  return (
    //This is jsx
    //Pass props where we render, the function that renders.
    <section className="Booklist">
      {/* These are the components. */}
      <Book
        // These are the properties
        title={firstBook.title}
        img={firstBook.img_src}
        author={firstBook.Author}
        desc={firstBook.Desc}
        imgAlt={firstBook.img_alt}
      >
        <p>
          {/* This is children props */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          minus voluptatum reprehenderit obcaecati aut beatae, rerum quae eos
          unde totam!
        </p>
      </Book>
      {/* This is a function call in jsX*/}
      <Book
        title={secondBook.title}
        img={secondBook.img_src}
        author={secondBook.Author}
        desc={secondBook.Desc}
        imgAlt={secondBook.img_alt}
      />
    </section>
  );
}

//Explicit
//default convention for properties or parameters.

const Book = (props) => {
  // setup vars , can be global

  //props structuring
  const { title, img, imgAlt, author, desc, children } = props;
  //console.log(props); in js
  return (
    <article className="Book">
      <h1>{title}</h1>
      <img src={img} alt={imgAlt} />
      <h2>{author.toUpperCase()}</h2>
      <h2>{desc}</h2>
      <p>{children}</p>
      {/*console.log(props) in jsx */}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
