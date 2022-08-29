import { actionTypes } from '../actionTypes/actionTypes.js'
const {INCREMENT, DECREMENT}=actionTypes
export const countUserPlus = () => {
    type: INCREMENT
}
export const countUser = () => {
    type: DECREMENT
}