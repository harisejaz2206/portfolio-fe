import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectUserBrandLoading = (state: RootState) =>
  state.userbrandslice.loading;
export const selectUserBrandError = (state: RootState) =>
  state.userbrandslice.error;
export const selectUserBrandMessage = (state: RootState) =>
  state.userbrandslice.message;
export const selectUserBrandData = (state: RootState) =>
  state.userbrandslice.brands;
export const selectUserBrandProducts = (state: RootState) =>
  state.userbrandslice.products;
