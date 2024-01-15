import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderService } from "../../services/order.service";

export const getOrderListing = createAsyncThunk(
  "order/getOrderListing",
  async (_, { rejectWithValue }) => {
    try {
      const response = await orderService.getOrderListingHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const getOrderDetails = createAsyncThunk(
  "order/getOrderDetails",
  async (orderId: string, { rejectWithValue }) => {
    try {
      const response = await orderService.getOrderDetailsHandler(orderId);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
