const redux = require("redux");
const createStore = redux.createStore;
// Buy cake / buy icecream
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "2nd redux action",
  };
}

const initialState = {
  numofCakes: 10,
  numofIceCreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

//  responsibility num 2 : get state
console.log("initial state : ", store.getState());

//  responsibility num 4 and 5 : subscribe and unsubscribe
const unsubscribe = store.subscribe(() =>
  console.log("updated State : ", store.getState())
);

//  responsibility num 3 : action dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
