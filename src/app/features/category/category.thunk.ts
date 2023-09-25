import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory } from "./interfaces/category.interface";
import { categoryService } from "../../services/category.service";

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (credentials: ICategory, { rejectWithValue }) => {
    try {
      console.log("inside");
      const response = await categoryService.addCategoryHandler(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);

export const getCategories = createAsyncThunk(
  "brand/getBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await categoryService.getAllCategoriesHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "brand/deleteCategory",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await categoryService.deleteCategoryHandler(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while deleting the brand"
      );
    }
  }
);
