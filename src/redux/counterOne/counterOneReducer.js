import {  DECREMENT_ONE } from "./counterOneType";

const initialState = {
  number: 10,
};
export default function counterOneReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT_ONE: {
      return {
        ...state,
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
}
