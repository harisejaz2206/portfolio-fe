import { createAsyncThunk } from "@reduxjs/toolkit";
import { userCategoryService } from "../../services/userportal.categories.service";
import { IUserPostCategoryProductListing } from "./interfaces/category.interface";

export const getUserCategories = createAsyncThunk(
  "user-categories/getUserCategories",
  async (_, { rejectWithValue }) => {
    try {
      console.log("getUserCategories thunk called");
      const response = await userCategoryService.getAllCategoriesHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const userCategoriesProductListing = createAsyncThunk(
  "user-categories/userCategoriesProductListing",
  async (credentials: IUserPostCategoryProductListing, { rejectWithValue }) => {
    try {
      const response =
        await userCategoryService.getCategoryProductListingHandler(credentials);
      console.log("userCategoriesProductListing thunk", response);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
