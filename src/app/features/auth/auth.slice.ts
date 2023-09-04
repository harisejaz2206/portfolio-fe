import { createSlice } from "@reduxjs/toolkit";
import initialAuthState from "./auth.initialstate";
import { login, signup } from "./auth.thunk";
import { stat } from "fs";

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
      return initialAuthState;
    },
    socialLogin: (state, action) => {
      state.user = action.payload;
    },
    signUp: (state, action) => {
      state.user = action.payload?.user;
      state.token = action.payload?.token.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.payload?.user;
      state.token = action.payload.payload?.token.accessToken;
      state.message = action.payload.message;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      // state.user = action.payload?.payload?.user;
      // state.token = action.payload?.payload?.token.accessToken;
      state.user!.role = action.payload!.payload!.user.role; // not sure about this line...
      state.message = action.payload?.message;
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // builder.addCase(forgotpassword.pending, (state) => {
    //   state.loading = true;
    //   state.error = null; // Optionally reset the error when the request starts
    // });

    // builder.addCase(forgotpassword.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.message = action.payload.message; // Handle success logic, such as updating a success message
    // });

    // builder.addCase(forgotpassword.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message; // Handle error logic
    // });

    // builder.addCase(resetpassword.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // });

    // builder.addCase(resetpassword.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.message = action.payload.message;
    // });

    // builder.addCase(resetpassword.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export const { logout, socialLogin, signUp } = authSlice.actions;
export default authSlice.reducer;
