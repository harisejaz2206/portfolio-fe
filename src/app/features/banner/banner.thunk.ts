import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBanner } from "./interfaces/banner.interface";
import { brandService } from "../../services/brand.service";
import { bannerService } from "../../services/banner.service";

export const addBanner = createAsyncThunk(
  "banner/addBanner",
  async (credentials: IBanner, { rejectWithValue }) => {
    try {
      const response = await bannerService.addBannerHander(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while adding the banner"
      );
    }
  }
);

export const getBanners = createAsyncThunk(
  "banner/getBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await bannerService.getAllBannersHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching banner"
      );
    }
  }
);

export const deleteBanner = createAsyncThunk(
  "banner/deleteBanner",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await bannerService.deleteBrandHandler(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while deleting the banner"
      );
    }
  }
);
