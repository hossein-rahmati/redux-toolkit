import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { number: 10 },
  reducers: {
    decrement: (state, action = 2) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { decrement } = counterSlice.actions;
export default counterSlice.reducer;
