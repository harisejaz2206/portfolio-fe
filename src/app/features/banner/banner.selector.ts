import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectBannerLoading = (state: RootState) => state.banner.loading;
export const selectBannerError = (state: RootState) => state.banner.error;
export const selectBannerMessage = (state: RootState) => state.banner.message;
export const selectBannerData = (state: RootState) => state.banner.banner;
