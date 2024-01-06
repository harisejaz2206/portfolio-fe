import { createAsyncThunk } from "@reduxjs/toolkit";
import { wishlistService } from "../../services/wishlist.service";
import { IAddWishlist, IDeleteWishlist } from "./interfaces/wishlist.interface";

export const getWishlistItems = createAsyncThunk(
  "wishlist/getWishlistItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await wishlistService.getWishlistHandler();
      console.log("Wishlist thunk data", response);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (credentials: IAddWishlist, { rejectWithValue }) => {
    try {
      const response = await wishlistService.addWishlistHandler(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);

export const deleteFromWishlist = createAsyncThunk(
  "wishlist/deleteFromWishlist",
  async (credentials: IDeleteWishlist, { rejectWithValue }) => {
    try {
      const response = await wishlistService.deleteWishlistHandler(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching outlets"
      );
    }
  }
);
