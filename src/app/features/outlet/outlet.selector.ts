import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectOutletLoading = (state: RootState) => state.outlet.loading;
export const selectOutletError = (state: RootState) => state.outlet.error;
export const selectOutletMessage = (state: RootState) => state.outlet.message;
export const selectOutletData = (state: RootState) => state.outlet.outlet;
