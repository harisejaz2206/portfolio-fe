import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectBrandLoading = (state: RootState) => state.brand.loading;
export const selectBrandError = (state: RootState) => state.brand.error;
export const selectBrandMessage = (state: RootState) => state.brand.message;
export const selectBrandData = (state: RootState) => state.brand.brand;
