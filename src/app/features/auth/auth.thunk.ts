import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogInInterface } from "./interfaces/login.interface";
import { ISignUpInterface } from "./interfaces/sign-up.interface";
import { authService } from "../../services/auth.service";
import { IForgotPasswordInterface } from "./interfaces/forgot-password.interface";
import { IResetPasswordInterface } from "./interfaces/reset-password.interface";

import { ISocialAuthInterface } from "./interfaces/socialauth-interface";

export const signup = createAsyncThunk(
  "auth/register",
  async (credentials: ISignUpInterface, { rejectWithValue }) => {
    try {
      const response = await authService.signupHandler(credentials);
      // debugger;
      return response;
    } catch (error: any) {
      // debugger;
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: ILogInInterface, thunkAPI) => {
    try {
      const response = await authService.loginHandler(credentials);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error during login"
      );
    }
  }
);

export const forgotpassword = createAsyncThunk(
  "auth/forgotpassword",
  async (credentials: IForgotPasswordInterface, thunkAPI) => {
    try {
      const response = await authService.forgotPasswordHandler(credentials);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error during login"
      );
    }
  }
);

export const resetpassword = createAsyncThunk(
  "auth/resetpassword",
  async (credentials: IResetPasswordInterface, thunkAPI) => {
    try {
      const response = await authService.resetPasswordHandler(credentials);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error during login"
      );
    }
  }
);

export const social = createAsyncThunk(
  "auth/social",
  async (credentials: ISocialAuthInterface, { rejectWithValue }) => {
    try {
      const response = await authService.socialAuthHandler(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);
