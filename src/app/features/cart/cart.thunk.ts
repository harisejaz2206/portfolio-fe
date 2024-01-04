import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../../services/cart.service";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartService.getUserProductListingHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
