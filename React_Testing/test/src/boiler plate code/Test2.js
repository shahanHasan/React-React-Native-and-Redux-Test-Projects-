import React from "react";
import ReactDOM from "react-dom";

//JSX Rules
//return single element
//div section article fragment
//use camel case for html attribute
//className instead of class
//close every element
//formatting

// you cannot have multiple divs returned, Can only return 1 fragment.
function Welcome() {
  return (
    <React.Fragment>
      <Person />
      <Age />
      <div>
        <h3>My first React Component.</h3>
        <ul>
          <li>
            <a href="#">React List</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>My Second React Component.</h3>
        <ul>
          <li>
            <a href="#">React List</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

//Reactjs/Javascript Function/Short Hand syntax
const Person = () => <h1>MY Name is Shahan.</h1>;
const Age = () => {
  return <p>MY age is 24.</p>;
};

ReactDOM.render(<Welcome />, document.getElementById("root"));
