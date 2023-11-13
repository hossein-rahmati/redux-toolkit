import { DECREMENT_TWO } from "./counterTwoType";

export function decrementTwo(number = 1) {
  return {
    type: DECREMENT_TWO,
    payload: number,
  };
}
