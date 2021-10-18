import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h3>Number of icecream : {props.numofIcecream} </h3>
      <button onClick={props.buyIcecream}>Buy Icecream </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numofIcecream: state.icecream.numofIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
