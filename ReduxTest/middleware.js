const redux = require("redux");
const reduxlogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxlogger.createLogger();
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

const initialCakeState = {
  numofCakes: 10,
};

const initialIcecreamState = {
  numofIceCreams: 20,
};

const Cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    default:
      return state;
  }
};

const Icecreamreducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: Cakereducer,
  icecream: Icecreamreducer,
});
const store = createStore(rootReducer,applyMiddleware(logger));

//  responsibility num 2 : get state
console.log("initial state : ", store.getState());

//  responsibility num 4 and 5 : subscribe and unsubscribe
const unsubscribe = store.subscribe(() => {});

//  responsibility num 3 : action dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
