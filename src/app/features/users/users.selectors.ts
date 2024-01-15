import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectUsersLoading = (state: RootState) => state.users.loading;

export const selectUsersError = (state: RootState) => state.users.error;

export const selectUsersMessage = (state: RootState) => state.users.message;

export const selectUsersData = (state: RootState) => state.users.users;
