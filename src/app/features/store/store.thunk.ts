import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStore } from "./interfaces/store.interface";
import { storeService } from "../../services/store.service";

export const addStore = createAsyncThunk(
  "store/addStore",
  async (credentials: IStore, { rejectWithValue }) => {
    try {
      const response = await storeService.addStoreHandler(credentials);
      console.log("response: ", response);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);

export const getStores = createAsyncThunk(
  "store/getStores",
  async (_, { rejectWithValue }) => {
    try {
      const response = await storeService.getAllStoresHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const toggleStoreStatus = createAsyncThunk(
  "store/toggleStoreStatus",
  async (storeId: string, { rejectWithValue }) => {
    try {
      const response = await storeService.toggleStoreStatusHandler(storeId); // Pass storeId if necessary
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data ||
          "An error occurred while toggling the store status"
      );
    }
  }
);
