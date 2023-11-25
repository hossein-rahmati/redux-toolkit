import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
  },
});

export default store;
