import { BUY_ICECREAM } from "./icescreamTypes";
const initialState = {
  numofIcecream: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIcecream: state.numofIcecream - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
