import { DECREMENT_TWO } from "./counterTwoType";

const initialState = {
  number: 20,
};
export default function counterTwoReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT_TWO: {
      return {
        ...state,
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
}
