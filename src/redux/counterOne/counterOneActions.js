import {  DECREMENT_ONE } from "./counterOneType";

export function decrementOne(number = 1) {
  return {
    type: DECREMENT_ONE,
    payload: number,
  };
}
