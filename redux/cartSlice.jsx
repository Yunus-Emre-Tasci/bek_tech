import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPoints: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, count, rating } = action.payload;
      state.cartItems.push({ id, count, rating });
      state.totalPoints += count * rating;
    },
    removeFromCart: (state, action) => {
      const { id, count, rating } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        state.totalPoints -= count * rating;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

