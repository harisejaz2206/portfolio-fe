import { createSlice } from "@reduxjs/toolkit";
import initialOrdersState from "./order.initialstate";
import { getOrderDetails, getOrderListing } from "./order.thunk";

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrdersState,
  reducers: {
    clearOrderData: (state) => {
      return initialOrdersState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrderDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOrderDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.orderDetails = action.payload.payload?.order;
      console.log(action.payload.payload?.order);
    });

    builder.addCase(getOrderDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getOrderListing.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOrderListing.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.orderListing = action.payload.payload?.orders;
    });

    builder.addCase(getOrderListing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearOrderData } = orderSlice.actions;
export default orderSlice.reducer;
