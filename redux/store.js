import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducer/rootReducer.js";

const initialState = {};
const middleWares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  (applyMiddleware(...middleWares))
);

export default store;
