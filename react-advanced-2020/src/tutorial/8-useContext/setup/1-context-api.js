import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

// This create context takes 2 params , 1. provider(Provides state and functionality ) ,
// 2. Consumer (Consumes state and functionality)
const PersonContext = React.createContext();

// Root Component , where all other components are rendered.
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const PersonData = useContext(PersonContext);
  return (
    <>
      {PersonData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
