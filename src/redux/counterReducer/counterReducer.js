import { DECREMENT } from "./counterType";

const initialState = {
  number: 10,
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT: {
      return {
        ...state,
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
}
