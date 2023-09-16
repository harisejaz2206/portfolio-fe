import { createAsyncThunk } from "@reduxjs/toolkit";
import { outletService } from "../../services/outlet.service";
import { IOutlet } from "./interfaces/outlet.interface";

export const addOutlet = createAsyncThunk(
  "outlet/addOutlet",
  async (credentials: IOutlet, { rejectWithValue }) => {
    try {
      const response = await outletService.addOutletHander(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);

export const getOutlets = createAsyncThunk(
  "outlet/getOutlets",
  async (_, { rejectWithValue }) => {
    try {
      const response = await outletService.getAllOutletsHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
