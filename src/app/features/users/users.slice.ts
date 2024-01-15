import { createSlice } from "@reduxjs/toolkit";
import initialUsersState from "./users.initialstate";
import { getUsers } from "./users.thunk";

const userBrandsSlice = createSlice({
  name: "user-brands",
  initialState: initialUsersState,
  reducers: {
    clearUsersData: (state) => {
      return initialUsersState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.users = action.payload.payload?.users;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearUsersData } = userBrandsSlice.actions;
export default userBrandsSlice.reducer;
