import { combineReducers } from "redux";
import { doctorReducer } from "./doctorReducer.js";
const rootReducer = combineReducers({ doctorReducer })

export default rootReducer;

