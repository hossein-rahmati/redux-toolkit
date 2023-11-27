import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk(
  "user/getAsyncUsers",
  async (payload, { rejectWithValue }) => {
    // console.log(payload);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  // reducer: () => {}, in async actions we dont use (reducers), instead we use (extraReducers)
  extraReducers: {
    [getAsyncUsers.pending]: (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    },
    [getAsyncUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    [getAsyncUsers.rejected]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
