import React, { useState } from "react";

const UseStateObject = () => {
  /** With objects, we can have one state , but to invoke setstate function on a particular 
  property of an object we have to use the spread operator to let react know to leave everything 
  as is and only change a particular property.
  We can also have multiple button handlers for each property.*/

  /** We can also have multiple states to simulate the an object with multiple properties*/

  // const people = {
  //   id: 1,
  //   name: "peter",
  //   age: 20,
  //   message: "Random Message",
  // };
  // const [person, setperson] = React.useState(people);
  // const ChangeMessage = () => {
  //   setperson({ ...person, message: "Hello" });
  // };
  // const ChangeName = () => {
  //   setperson({ ...person, name: "John" });
  // };
  // const ChangeAge = () => {
  //   setperson({ ...person, age: 40 });
  // };

  const [name, setname] = React.useState("peter");
  const ChangeName = () => {
    setname("john");
  };
  const [age, setage] = useState(20);
  const ChangeAge = () => {
    setage(40);
  };
  const [message, setmessage] = useState("Random message");
  const ChangeMessage = () => {
    setmessage("hello world");
  };

  return (
    // <>
    //   <div>
    //     <h1>{person.id}</h1>
    //   </div>
    //   <div>
    //     <h1>{person.name}</h1>
    //     <button className="btn" onClick={ChangeName}>
    //       Change Name
    //     </button>
    //   </div>
    //   <div>
    //     <h1>{person.age}</h1>
    //     <button className="btn" onClick={ChangeAge}>
    //       Change Age
    //     </button>
    //   </div>
    //   <div>
    //     <h1>{person.message}</h1>
    //     <button className="btn" onClick={ChangeMessage}>
    //       Change Message
    //     </button>
    //   </div>
    // </>
    <>
      <div>
        <h1>{name}</h1>
        <button className="btn" onClick={ChangeName}>
          Change Name
        </button>
      </div>
      <div>
        <h1>{age}</h1>
        <button className="btn" onClick={ChangeAge}>
          Change Age
        </button>
      </div>
      <div>
        <h1>{message}</h1>
        <button className="btn" onClick={ChangeMessage}>
          Change Message
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
