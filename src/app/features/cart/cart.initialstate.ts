import { ICart, IUserProductListing } from "./interfaces/cartitems.interface";

interface ICartState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  product?: IUserProductListing[] | null;
  cart?: ICart[] | null;
}

const initialCartState: ICartState = {
  loading: null,
  error: null,
  message: null,
  product: [],
};

export default initialCartState;
