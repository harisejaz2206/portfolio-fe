import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectUserCategoryLoading = (state: RootState) =>
  state.usercategoryslice.loading;

export const selectUserCategoryError = (state: RootState) =>
  state.usercategoryslice.error;

export const selectUserCategoryMessage = (state: RootState) =>
  state.usercategoryslice.message;

export const selectUserCategoryData = (state: RootState) =>
  state.usercategoryslice.categories;
