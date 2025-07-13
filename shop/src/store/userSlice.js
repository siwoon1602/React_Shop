import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { user: "Siwoon", age: 29 },

  reducers: {
    plusAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { plusAge } = user.actions;

export default user;
