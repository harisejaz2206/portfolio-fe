import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectUserBrandLoading = (state: RootState) => {
  state.brand.loading;
};
export const selectUserBrandError = (state: RootState) => {
  state.brand.error;
};
export const selectUserBrandMessage = (state: RootState) => {
  state.brand.message;
};
export const selectUserBrandData = (state: RootState) => {
  state.brand.brand;
};
