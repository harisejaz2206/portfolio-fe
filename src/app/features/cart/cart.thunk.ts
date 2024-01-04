import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../../services/cart.service";
import { IAddToCart, IDeleteFromCart } from "./interfaces/cartitems.interface";

export const getUserProductListing = createAsyncThunk(
  "cart/getUserProductListing",
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

export const getUserCart = createAsyncThunk(
  "cart/getUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartService.getUserCartHandler();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (credentials: IAddToCart, { rejectWithValue }) => {
    try {
      const response = await cartService.addToCartHandler(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async (credentials: IDeleteFromCart, { rejectWithValue }) => {
    try {
      const response = await cartService.deleteFromCartHandler(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
