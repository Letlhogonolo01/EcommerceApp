import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../services/ProductsService";

const initialState = getProducts(); // Initialize the state with the fetched products

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
