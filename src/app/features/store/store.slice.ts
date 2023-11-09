import { createSlice } from "@reduxjs/toolkit";
import initialStoreState from "./store.initialstate";
import { addStore, getStores, toggleStoreStatus } from "./store.thunk";

const storeSlice = createSlice({
  name: "store",
  initialState: initialStoreState,
  reducers: {
    clearStoreData: (state) => {
      return initialStoreState;
    },
    toggleActiveStatus: (state, action) => {
      const storeIndex = state.store!.findIndex(
        (store) => store._id === action.payload
      );
      if (storeIndex !== -1) {
        state.store![storeIndex].isActive = !state.store![storeIndex].isActive;
      }
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
      state.loading = false;
      state.store = action.payload.payload?.stores;
      state.message = action.payload.message;
    });

    builder.addCase(getStores.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(toggleStoreStatus.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(toggleStoreStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });

    builder.addCase(toggleStoreStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearStoreData, toggleActiveStatus } = storeSlice.actions;
export default storeSlice.reducer;
