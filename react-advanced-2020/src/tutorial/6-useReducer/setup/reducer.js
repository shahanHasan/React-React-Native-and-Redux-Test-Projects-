// reducer function
export const reducer = (state, action) => {
  // 1. state is the state / data right before update
  // 2. action is what are we trying to do to state , What sort of update.
  // This function will manipulate the state.
  // So pipeline : use Reducer -> reducer func after we call (dispatch) or
  // Dispatch the action
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      ModalContent: "Item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      ModalContent: "Please Enter a Value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      ModalContent: "Item is removed",
    };
  }
  throw new Error("No matching action type.");
};
