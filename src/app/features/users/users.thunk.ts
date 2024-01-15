import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersService } from "../../services/getusers.service";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await usersService.getAllUsersHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
