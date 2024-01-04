import { createAsyncThunk } from "@reduxjs/toolkit";
import { userCategoryService } from "../../services/userportal.categories.service";

export const getUserCategories = createAsyncThunk(
  "user-categories/getUserCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userCategoryService.getAllCategoriesHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
