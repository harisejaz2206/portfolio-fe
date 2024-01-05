import { createAsyncThunk } from "@reduxjs/toolkit";
import { userBrandService } from "../../services/userportal.brands.service";

export const getUserBrands = createAsyncThunk(
  "user-brands/getUserBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userBrandService.getAllBrandsHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
