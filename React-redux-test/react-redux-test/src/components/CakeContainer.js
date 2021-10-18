import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h3>Number of cakes : {props.numofCakes} </h3>
      <button onClick={props.buyCake}>Buy Cake </button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);