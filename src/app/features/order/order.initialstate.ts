import { IOrderDetails, IOrderListing } from "./interfaces/order.interface";

interface IOrderState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  orderListing?: IOrderListing[] | null;
  orderDetails?: IOrderDetails | null;
  sessionId?: string | null;
}

const initialOrdersState: IOrderState = {
  loading: false,
  error: null,
  message: null,
  orderListing: [],
  orderDetails: null,
  sessionId: null,
};

export default initialOrdersState;
