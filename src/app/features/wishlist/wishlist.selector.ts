import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectWishlistLoading = (state: RootState) => {
  state.wishlist.loading;
};
export const selectWishlistError = (state: RootState) => {
  state.wishlist.error;
};
export const selectWishlistMessage = (state: RootState) => {
  state.wishlist.message;
};
export const selectWishlistData = (state: RootState) => {
  state.wishlist.wishlist;
};
