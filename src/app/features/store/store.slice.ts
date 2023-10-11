import { createSlice } from "@reduxjs/toolkit";
import initialStoreState from "./store.initialstate";
import { addStore, getStores } from "./store.thunk";

const storeSlice = createSlice({
  name: "store",
  initialState: initialStoreState,
  reducers: {
    clearStoreData: (state) => {
      return initialStoreState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addStore.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addStore.fulfilled, (state, action) => {
      state.loading = false;
      //   state.store!.push(action.payload.payload?.store!);
      state.message = action.payload.message;
    });

    builder.addCase(addStore.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getStores.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getStores.fulfilled, (state, action) => {
      console.log(
        "action.payload.payload?.stores:",
        action.payload.payload?.stores
      );
      state.loading = false;
      state.store = action.payload.payload?.stores;
      state.message = action.payload.message;
    });

    builder.addCase(getStores.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearStoreData } = storeSlice.actions;
export default storeSlice.reducer;
