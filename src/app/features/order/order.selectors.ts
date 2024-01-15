import { RootState } from "../../../store/rootReducer";

// Selectors to get parts of the state
export const selectOrdersLoading = (state: RootState) => state.order.loading;

export const selectOrdersError = (state: RootState) => state.order.error;

export const selectOrdersMessage = (state: RootState) => state.order.message;

export const selectOrdersListingData = (state: RootState) =>
  state.order.orderListing;

export const selectOrdersDetailsData = (state: RootState) =>
  state.order.orderDetails;
