import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectCategoryLoading = (state: RootState) =>
  state.category.loading;
export const selectCategoryError = (state: RootState) => state.category.error;
export const selectCategoryMessage = (state: RootState) =>
  state.category.message;
export const selectCategoryData = (state: RootState) => state.category.category;
