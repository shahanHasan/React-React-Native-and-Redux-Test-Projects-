import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // form data handling with usestate ,
  const [FirstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (FirstName && Email) {
      const person = { id: new Date().getTime().toString(), FirstName, Email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
      console.log(person);
    } else {
      console.log("Empty Values.");
    }
  };

  return (
    <>
      <article>
        {/* we can have onClick or onSubmit with form in jsx */}
        {/* Use either onsubmit on form or on click in button */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person, index) => {
          const { id, FirstName, Email } = person;
          return (
            <div className="item" key={id}>
              <h4>{FirstName}</h4>
              <p>{Email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
