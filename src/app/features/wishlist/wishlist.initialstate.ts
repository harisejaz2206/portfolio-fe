import { IWishlist } from "./interfaces/wishlist.interface";

interface IWishlistState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  wishlist?: IWishlist[] | null;
}

const initialWishlistState: IWishlistState = {
  loading: null,
  error: null,
  message: null,
  wishlist: [],
};

export default initialWishlistState;
