import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

// This use state setup is good for small scale projects.
// Use flux , redux , reducers for larger scale projects.
const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  // toggle modal component
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form data to state here in handle submit
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {people.map((person, index) => {
        const { id, name } = person;
        return (
          <div key={id}>
            {/* <h2>{id}</h2> */}
            <h1>
              {name} {id}{" "}
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default Index;
