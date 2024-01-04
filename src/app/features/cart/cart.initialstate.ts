import {
  IUserCart,
  IUserProductListing,
} from "./interfaces/cartitems.interface";

interface ICartState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  product?: IUserProductListing[] | null;
  cart?: IUserCart[] | null;
  totalPrice?: number | null;
  totalQuantity?: number | null;
}

const initialCartState: ICartState = {
  loading: null,
  error: null,
  message: null,
  product: [],
  totalPrice: null,
  totalQuantity: null,
};

export default initialCartState;
