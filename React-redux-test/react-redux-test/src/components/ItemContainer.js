import React from "react";
import { connect } from "react-redux";
import { buyIcecream, buyCake } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemstate = ownProps.cake
    ? state.cake.numofCakes
    : state.icecream.numofIcecream;

  return {
    item: itemstate,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
