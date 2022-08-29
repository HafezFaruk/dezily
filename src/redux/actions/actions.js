import { actionTypes } from "../types/actionTypes.js"
const { GET_DOCTORS, ADD_DOCTORS } = actionTypes;

export const getDoctor = () => {
    return {
      type: GET_DOCTORS,
    };
}
export const addDoctor = () => {
    return {
      type: ADD_DOCTORS,
    };
}