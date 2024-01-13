import { createSlice } from "@reduxjs/toolkit";
import initialUserCategoriesState from "./category.initialstate";
import {
  getUserCategories,
  userCategoriesProductListing,
} from "./category.thunk";

const userCategoriesSlice = createSlice({
  name: "user-categories",
  initialState: initialUserCategoriesState,
  reducers: {
    clearCategoryData: (state) => {
      return initialUserCategoriesState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userCategoriesProductListing.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(userCategoriesProductListing.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      // state.categories = action.payload.payload?.categories;
      state.products = action.payload.payload?.products;
      console.log("Get user categories ", action.payload.payload?.products);
      //   state.cart = action.payload.payload?.cartItems;
    });

    builder.addCase(userCategoriesProductListing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUserCategories.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.categories = action.payload.payload?.categories;
      console.log("Get user categories ", action.payload.payload?.categories);
      //   state.cart = action.payload.payload?.cartItems;
    });

    builder.addCase(getUserCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearCategoryData } = userCategoriesSlice.actions;
export default userCategoriesSlice.reducer;
