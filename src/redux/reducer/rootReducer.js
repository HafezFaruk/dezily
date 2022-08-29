import { combineReducers } from "redux";
import { doctorReducer } from "./doctorReducer.js";

export const rootReducer = combineReducers(doctorReducer)