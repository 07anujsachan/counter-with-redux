import { createStore } from "redux";

function counterReducer(state = { value: 0, step: 0, max: NaN }, action) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    case "reset":
      return { value: 0 };

    default:
      return state;
  }
}

const store = createStore(counterReducer);
export default store;
