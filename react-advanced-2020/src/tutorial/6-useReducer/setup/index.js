import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  ModalContent: "",
};
// This use state setup is good for small scale projects.
// Use flux , redux , reducers for larger scale projects.
const Index = () => {
  const [name, setName] = useState("");
  // when we invoke use reducer hook , we get an array of 2 things,
  // 1. Previous State before update
  // 2. A dispatch function which creates an object with prop : type : PREVENT
  // Reducer : 1. In use reducer we pass in the reducer function.
  // Reducer : 2. We pass in the initial state or default state.
  const [state, dispatch] = useReducer(reducer, defaultState);
  // Difference between  use state and use reducer is
  // when we wanna do sth to the current state the dispatch func will go through reducer
  // function which will take old state and return new state.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form data to state here in handle submit
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPeople });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const deleteHandle = (props) => {
    dispatch({ type: "REMOVE_ITEM", payload: props });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.ModalContent} />
      )}
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
      {state.people.map((person, index) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            {/* <h2>{id}</h2> */}
            <h1>
              {name} {id}{" "}
            </h1>
            <button onClick={() => deleteHandle(person.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
