import { configureStore, createSlice } from "@reduxjs/toolkit";

let data = createSlice({
  name: "data",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plusStock(state, action) {
      const item = state.find((el) => el.id === action.payload);
      if (item) {
        item.count++;
      }
    },
    minusStock(state, action) {
      const item = state.find((el) => el.id === action.payload);
      if (item && item.count > 0) {
        item.count--;
      }
    },
  },
});

export let { plusStock, minusStock } = data.actions;

export default configureStore({
  reducer: {
    data: data.reducer,
  },
});
