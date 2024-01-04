import { createSlice } from "@reduxjs/toolkit";
import initialUserCategoriesState from "./category.initialstate";
import { getUserCategories } from "./category.thunk";

const userCategoriesSlice = createSlice({
  name: "user-categories",
  initialState: initialUserCategoriesState,
  reducers: {
    clearCategoryData: (state) => {
      return initialUserCategoriesState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserCategories.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
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
