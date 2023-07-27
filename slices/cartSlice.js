import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.totalPrice += existingItem.product.price;
      } else {
        state.push({
          id,
          qty: 1,
          product: action.payload,
          totalPrice: action.payload.price,
        });
      }
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
