import { createStore } from "redux";
import { rootReducer } from "./reducer/rootReducer.js";

const store = createStore(rootReducer)
export default store;