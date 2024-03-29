import { createSlice } from "@reduxjs/toolkit";
import initialCartState from "./cart.initialstate";
import {
  addToCart,
  deleteFromCart,
  getUserCart,
  getUserProductListing,
} from "./cart.thunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    clearCartData: (state) => {
      return initialCartState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProductListing.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserProductListing.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.product = action.payload.payload?.products;
    });

    builder.addCase(getUserProductListing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUserCart.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.cart = action.payload.payload?.cartItems;
      state.totalPrice = action.payload.payload?.totalPrice;
      state.totalQuantity = action.payload.payload?.totalQuantity;
    });

    builder.addCase(getUserCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteFromCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteFromCart.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(deleteFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearCartData } = cartSlice.actions;
export default cartSlice.reducer;
