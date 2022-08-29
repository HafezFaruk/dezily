import { actionTypes } from "../types/actionTypes.js";
const { GET_DOCTORS, ADD_DOCTORS } = actionTypes;
const initialState = {
  doctors: [],
  error: null,
  isLoading: false,
};

export const doctorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOCTORS:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_DOCTORS:
      return {
        ...state,
        doctors: payload
      };

    default:
      return state;
  }
};
