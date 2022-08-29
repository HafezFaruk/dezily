import { actionTypes } from '../actionTypes/actionTypes.js'
const { INCREMENT, DECREMENT } = actionTypes

export const initialState = {
    doctors: [
        {
            name: "Ashraf",
            Hospital:"Estran"
        }
    ],
        isLoading: false,
     error: null
}

export const doctorReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case INCREMENT:
            return {
                ...state,
                isLoading: true,
                error: null,
                doctors: payload.doctors
            }
        default:
            return state;
    }
}
