import { configureStore } from '@reduxjs/toolkit';
import { getProducts } from "./services/ProductsService";

import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    products: getProducts(), // Set the initial state of products slice using getProducts()
  },
});

export default store;
