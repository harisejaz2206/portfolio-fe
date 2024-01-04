import { createSlice } from "@reduxjs/toolkit";
import initialWishlistState from "./wishlist.initialstate";
import {
  addToWishlist,
  deleteFromWishlist,
  getWishlistItems,
} from "./wishlist.thunk";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    clearWishlistData: (state) => {
      return initialWishlistState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWishlistItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getWishlistItems.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      //   state.cart = action.payload.payload?.cartItems;
    });

    builder.addCase(getWishlistItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(addToWishlist.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(addToWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteFromWishlist.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteFromWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(deleteFromWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearWishlistData } = wishlistSlice.actions;
export default wishlistSlice.reducer;
