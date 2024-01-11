import { createSlice } from "@reduxjs/toolkit";
import { getUserBrands, userBrandsProductListing } from "./brand.thunk";
import initialUserBrandsState from "./brand.initialstate";
import initialProductState from "../product/product.initialstate";

const userBrandsSlice = createSlice({
  name: "user-brands",
  initialState: initialUserBrandsState,
  reducers: {
    clearBrandData: (state) => {
      return initialUserBrandsState;
    },

    clearBrandListing: (state) => {
      return initialUserBrandsState;
    },

    clearProductData: (state) => {
      return initialProductState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userBrandsProductListing.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(userBrandsProductListing.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.products = action.payload.payload?.products;
      // state.brands = action.payload.payload?.brands;
      console.log("Get user brands ", action.payload.payload?.products);
      //   state.cart = action.payload.payload?.cartItems;
    });

    builder.addCase(userBrandsProductListing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUserBrands.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.brands = action.payload.payload?.brands;
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
