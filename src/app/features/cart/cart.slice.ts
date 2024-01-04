import { createSlice } from "@reduxjs/toolkit";
import initialCartState from "./cart.initialstate";
import { getCartItems } from "./cart.thunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    clearCartData: (state) => {
      return initialCartState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      //   state.cart = action.payload.payload?.cartItems;
    });

    builder.addCase(getCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearCartData } = cartSlice.actions;
export default cartSlice.reducer;
