import { IOrderDetails, IOrderListing } from "./interfaces/order.interface";

interface IOrderState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  orderListing?: IOrderListing[] | null;
  orderDetails?: IOrderDetails | null;
}

const initialOrdersState: IOrderState = {
  loading: true,
  error: null,
  message: null,
  orderListing: [],
  orderDetails: null,
};

export default initialOrdersState;
