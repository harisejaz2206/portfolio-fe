import { createAsyncThunk } from "@reduxjs/toolkit";
import { userBrandService } from "../../services/userportal.brands.service";
import { IUserPostBrandProductListing } from "./interfaces/brand.interface";

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

export const userBrandsProductListing = createAsyncThunk(
  "user-brands/userBrandsProductListing",
  async (credentials: IUserPostBrandProductListing, { rejectWithValue }) => {
    try {
      const response = await userBrandService.getBrandProductListingHandler(
        credentials
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
