// Async actions with redux using middleware
/**
 *
 * Typical state for api fetch ->
 *
 * state = {
 *
 * loading : true,
 * data : [],
 * error : ''
 *
 * }
 *
 * loading : Display a loading spinner in your component
 * data : list of users
 * error : display error to user
 *
 * Actions :
 *
 * 1. Fetch data from api end point
 * 2. actions :
 *      1. FETCH_USERS_REQUEST
 *      2. FETCH_USERS_SUCCESS
 *      3. FETCH_USERS_FAILURE
 *
 * REDUCERS :
 *
 * case : FETCH_USERS_REQUEST
 *  loading : true
 * case : FETCH_USERS_SUCCESS
 *  loading : false
 *  users : data (from api)
 *
 * case : FETCH_USERS_FAILURE
 *  loading : false
 * error : error(from api)
 */

// imports
const redux = require("redux");
const reduxlogger = require("redux-logger");
const logger = reduxlogger.createLogger();
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  errors: "",
};

// constants for action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        errors: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        errors: action.payload,
      };
  }
};

// Async Action creator
// we use redux thunk , it provides the ability to return functions rather then action
// objects

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaeholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

// Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

const unsubscribe = store.subscribe(() => {});

store.dispatch(fetchUsers());

unsubscribe();
