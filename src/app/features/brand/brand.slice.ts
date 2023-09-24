import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import initialBrandState from "./brand.initialstate";
import { addBrand, getBrands } from "./brand.thunk";

const brandSlice = createSlice({
  name: "brand",
  initialState: initialBrandState,
  reducers: {
    clearBrandData: (state) => {
      return initialBrandState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBrand.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addBrand.fulfilled, (state, action) => {
      state.loading = false;
      state.brand!.push(action.payload.payload?.brand!);
      state.message = action.payload.message;
    });

    builder.addCase(addBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getBrands.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.brand = action.payload.payload;
      // console.log(action.payload.payload);
      state.message = action.payload.message;
      console.log(state.brand);
    });

    builder.addCase(getBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearBrandData } = brandSlice.actions;
export default brandSlice.reducer;
