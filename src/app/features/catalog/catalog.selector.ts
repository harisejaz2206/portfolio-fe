import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectCatalogLoading = (state: RootState) => state.catalog.loading;
export const selectCatalogError = (state: RootState) => state.catalog.error;
export const selectCatalogMessage = (state: RootState) => state.catalog.message;
export const selectCatalogData = (state: RootState) => state.catalog.catalog;
export const selectGetCatalogData = (state: RootState) =>
  state.catalog.getCatalog;
