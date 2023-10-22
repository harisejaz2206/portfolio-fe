import { createSlice } from "@reduxjs/toolkit";
import initialCatalogState from "./catalog.initialstate";
import { addCatalog, getCatalogs, deleteCatalog } from "./catalog.thunk";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialCatalogState,
  reducers: {
    clearCatalogData: (state) => {
      return initialCatalogState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCatalog.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addCatalog.fulfilled, (state, action) => {
      state.loading = false;
      state.catalog!.push(action.payload.payload?.catalog!);
      state.message = action.payload.message;
    });

    builder.addCase(addCatalog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getCatalogs.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCatalogs.fulfilled, (state, action) => {
      state.loading = false;
      state.catalog = action.payload.payload?.catalogItems;
      state.message = action.payload.message;
      console.log(state.catalog);
    });

    builder.addCase(getCatalogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteCatalog.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteCatalog.fulfilled, (state, action) => {
      state.loading = false;
      const id = action.payload.payload?.id!;
      console.log(id);
      state.catalog = state.catalog?.filter((catalog) => catalog._id !== id);
      state.message = action.payload.message;
    });

    builder.addCase(deleteCatalog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearCatalogData } = catalogSlice.actions;
export default catalogSlice.reducer;
