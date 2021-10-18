import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setnumber] = useState(1);
  return (
    <div>
      <h3>Number of cakes : {props.numofCakes} </h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numofCakes: state.cake.numofCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
