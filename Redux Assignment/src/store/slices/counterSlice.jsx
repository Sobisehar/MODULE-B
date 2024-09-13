import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = ++state.counter;
      console.log("add counter value");
    },

    decrement: (state, action) => {
      if (state.counter > 0) {
        state.counter = --state.counter;
        console.log("minus counter value");
      }
    },
  },
});

const { actions, reducer } = counterSlice;

export const { increment, decrement } = actions;

export default reducer;
