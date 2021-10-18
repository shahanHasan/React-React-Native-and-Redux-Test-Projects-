// if it was react app , the import redux using ES6 syntax
// import redux from 'redux'
//  Normally like so :

const redux = require("redux");
const createStore = redux.createStore;

// Actions :

// Action is an object in redux with the property "type"
// data is stored in state as object as well

// Redux pipeline :
// Store , action , reducers

// Store manages global state of an application.
// Store is subscribed to the application.
// The application cannot make ammendments to the store.
// The application dispatches actions to perform based on the change required.
// The reducer is the middle man. It takes an action and previous state of the
//                                  store abd return the new state

// app -> action -> reducer -> store update -> app in loop.

// Below is what an action looks like

// {
//     type: BUY_CAKE,
//     info : "First redux action"
// }

// Action creater , Funciton thats returns an action
// Actions are ofter dispatched using action creators.
const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// Reducer :

// Specify how the app's state changes in response sent to the store.
// Function that accepts state and action as arguments and returns the next state of the application.

// So simply : ( previousState , action ) => newState

const initialState = {
  numofCakes: 10,
};

// Redecuers mutate the passed down state ie previous state and returns a new state
// It does not alter the original state
// It is a pure Function :
// It accepts params and returns an object based on those params
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // In the real world you make a copy of the state object with the spread operator.
        //  Reasons :
        // 1. Because you cant alter the original state.
        // 2. A state might have multiple props. so you spread out all the props and update
        // only those that you need to update
        ...state,
        numofCakes: state.numofCakes - 1,
      };

    default:
      return state;
  }
};

// Redux Store :
/**
 * 1. For our entire application we will always have just one store.
 * 2. Responsibilities :
 *  1. Holds the app state
 *  2. Allows access to state via the getState()
 *  3. Allows state to be updated via dispatch(action)
 *  4. Register listeners via subscribe(listener -> app itself)
 *  4. This subscribe method is executed when the state in the store is update
 *  4. The listeners are applications that keep listening to the store for update and upon
 *  4. update they can update their own state by executing the subscribe method
 *  5. Handles unregistering of listeners via the function returned by subscribe(listener)
 */

//  responsibility num 1 :
// Redux store holding the application state :
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
