import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectUserCategoryLoading = (state: RootState) => {
  state.category.loading;
};
export const selectUserCategoryError = (state: RootState) => {
  state.category.error;
};
export const selectUserCategoryMessage = (state: RootState) => {
  state.category.message;
};
export const selectUserCategoryData = (state: RootState) => {
  state.category.category;
};
