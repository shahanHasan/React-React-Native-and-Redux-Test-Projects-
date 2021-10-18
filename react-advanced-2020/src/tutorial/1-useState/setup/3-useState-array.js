import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // use state setup.
  // With destructuring
  // this is normal way
  //    const [people, setpeople] = useState(people);
  // we can also do ,
  const [people, setPeople] = React.useState(data); //default value of state is empty array.
  // const buttonhandler = (id) => {
  //   let newPeople = people.filter((person) => person.id !== id);
  //   setPeople(newPeople);
  // };

  // Functional Update Form
  const buttonhandler = (id) => {
    setPeople((PrevPeople) => {
      let newPeople = PrevPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h1>{name}</h1>
            {/* This onClick function also has to be arrow function reference because
            it invokes setState function , So that setState function only renders 
            on Click of the button. */}
            <button className="btn" onClick={() => buttonhandler(id)}>
              Delete
            </button>
          </div>
        );
      })}
      {/* We can have onClick function with reference like a handler but if we wanna use  */}
      {/* state function directly onClick like below , we have to set it up with inline arrow 
       function */}
      {/* Or else setState function will render on boot and enter infinite loop */}
      <button className="btn" onClick={() => setPeople([])}>
        Delete
      </button>
    </>
  );
};

export default UseStateArray;
