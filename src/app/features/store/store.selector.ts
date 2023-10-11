import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state for the store feature
export const selectStoreLoading = (state: RootState) => state.store.loading;
export const selectStoreError = (state: RootState) => state.store.error;
export const selectStoreMessage = (state: RootState) => state.store.message;
export const selectStoreData = (state: RootState) => state.store.store;
