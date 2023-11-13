import { DECREMENT } from "./counterType";

export function decrement(number = 1) {
  return {
    type: DECREMENT,
    payload: number,
  };
}
