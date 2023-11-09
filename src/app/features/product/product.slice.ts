import { createSlice } from "@reduxjs/toolkit";
import initialProductState from "./product.initialstate";
import { addProduct, getProducts } from "./product.thunk";

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    clearProductData: (state) => {
      return initialProductState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });

    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload.payload?.products;
      state.message = action.payload.message;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearProductData } = productSlice.actions;
export default productSlice.reducer;
