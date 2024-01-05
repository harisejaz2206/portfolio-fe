import { createSlice } from "@reduxjs/toolkit";
import { getUserBrands } from "./brand.thunk";
import initialUserBrandsState from "./brand.initialstate";

const userBrandsSlice = createSlice({
  name: "user-brands",
  initialState: initialUserBrandsState,
  reducers: {
    clearBrandData: (state) => {
      return initialUserBrandsState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserBrands.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      console.log("Get user brands ", action.payload.payload?.brands);
      //   state.cart = action.payload.payload?.cartItems;
    });

    builder.addCase(getUserBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearBrandData } = userBrandsSlice.actions;
export default userBrandsSlice.reducer;
