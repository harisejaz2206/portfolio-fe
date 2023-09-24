import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBrand } from "./interfaces/brand.interface";
import { brandService } from "../../services/brand.service";

export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (credentials: IBrand, { rejectWithValue }) => {
    try {
      console.log("inside");
      const response = await brandService.addBrandHander(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);

export const getBrands = createAsyncThunk(
  "brand/getBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await brandService.getAllBrandsHandler();
      console.log("response", response);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
