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
    cartInProdcut(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
        alert("장바구니에 제품을 추가하였습니다!");
      } else {
        state.push(action.payload);
        alert("장바구니에 제품을 추가하였습니다!");
      }
    },

    deleteProduct(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      alert("장바구니에서 상품이 삭제되었습니다.");
    },
  },
});

let user = createSlice({
  name: "user",
  initialState: { user: "Siwoon", age: 29 },
  reducers: {
    plusAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { plusStock, minusStock, cartInProdcut, deleteProduct } =
  data.actions;
export let { plusAge } = user.actions;

export default configureStore({
  reducer: {
    data: data.reducer,
    user: user.reducer,
  },
});
