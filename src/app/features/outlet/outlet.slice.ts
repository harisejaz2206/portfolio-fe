import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import initialOutletState from "./outlet.initialstate";
import { addOutlet, getOutlets } from "./outlet.thunk";

const outletSlice = createSlice({
  name: "outlet",
  initialState: initialOutletState,
  reducers: {
    clearOutletData: (state) => {
      return initialOutletState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addOutlet.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addOutlet.fulfilled, (state, action) => {
      state.loading = false;
      state.outlet!.push(action.payload.payload?.outlet!);
      state.message = action.payload.message;
    });

    builder.addCase(addOutlet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getOutlets.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOutlets.fulfilled, (state, action) => {
      state.loading = false;
      state.outlet = action.payload.payload?.outlets;
      state.message = action.payload.message;
    });

    builder.addCase(getOutlets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearOutletData } = outletSlice.actions;
export default outletSlice.reducer;
