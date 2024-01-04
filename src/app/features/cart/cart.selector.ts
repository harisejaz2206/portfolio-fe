import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectCartLoading = (state: RootState) => {
  state.cart.loading;
};
export const selectCartError = (state: RootState) => {
  state.cart.error;
};
export const selectCartMessage = (state: RootState) => {
  state.cart.message;
};
export const selectCartData = (state: RootState) => {
  state.cart.cart;
};
export const selectUserProductsListing = (state: RootState) => {
  state.cart.product;
};
