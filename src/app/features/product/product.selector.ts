import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectProductLoading = (state: RootState) => state.product.loading;
export const selectProductError = (state: RootState) => state.product.error;
export const selectProductMessage = (state: RootState) => state.product.message;
export const selectProductData = (state: RootState) => state.product.product;
