import { createStore, combineReducers } from "redux";

const initialState = {
  value: false,
};

const isHam = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return { value: !state.value };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ isHam: isHam });

const store = createStore(rootReducer);

export default store;
