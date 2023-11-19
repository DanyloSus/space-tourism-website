// import libraries (ignore createStore error, because it needs for class component)
import { createStore, combineReducers } from "redux";

const initialState = {
  // create initial state
  value: false,
};

const isHam = (state = initialState, action) => {
  // create a reducer
  switch (action.type) {
    case "CHANGE": // action on CHANGE
      return { value: !state.value };
    default: // return a value
      return state;
  }
};

const rootReducer = combineReducers({ isHam: isHam }); // create a combine reducers

const store = createStore(rootReducer); // create store

export default store;
