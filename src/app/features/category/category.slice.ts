import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import initialCategoryState from "./category.initialstate";
import { addCategory, getCategories } from "./category.thunk";

const categorySlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {
    clearBrandData: (state) => {
      return initialCategoryState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.category!.push(action.payload.payload?.category!);
      state.message = action.payload.message;
    });

    builder.addCase(addCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload.payload?.categories;
      state.message = action.payload.message;
    });

    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearBrandData } = categorySlice.actions;
export default categorySlice.reducer;
