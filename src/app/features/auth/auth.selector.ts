import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";

// entire auth state
export const selectAuth = (state: RootState) => state.auth;

// Define the selector to get the user object
export const selectUser = createSelector([selectAuth], (auth) => auth.user);

// Define the selector to get the token
export const selectToken = createSelector([selectAuth], (auth) => auth.token);

export const selectMessage = createSelector(
  [selectAuth],
  (auth) => auth.message
);

// Define the selector to get the loading state
export const selectLoading = createSelector(
  [selectAuth],
  (auth) => auth.loading
);

// Define the selector to get the error
export const selectError = createSelector([selectAuth], (auth) => auth.error);
