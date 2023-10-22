import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICatalog } from "./interfaces/catalog.interface";
import { catalogService } from "../../services/catalog.service";

export const addCatalog = createAsyncThunk(
  "catalog/addCatalog",
  async (credentials: ICatalog, { rejectWithValue }) => {
    try {
      console.log("inside");
      const response = await catalogService.addCatalogHander(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);

export const getCatalogs = createAsyncThunk(
  "catalog/getCatalogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await catalogService.getAllCatalogsHandler();
      console.log("response", response);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const deleteCatalog = createAsyncThunk(
  "catalog/deleteCatalog",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await catalogService.deleteCatalogHandler(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while deleting the brand"
      );
    }
  }
);
