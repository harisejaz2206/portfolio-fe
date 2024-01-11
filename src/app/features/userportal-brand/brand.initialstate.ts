import { IUserProductListing } from "../cart/interfaces/cartitems.interface";
import { IUserBrandListing } from "./interfaces/brand.interface";

interface IBrandsState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  brands?: IUserBrandListing[] | null;
  products?: IUserProductListing[] | null;
}

const initialUserBrandsState: IBrandsState = {
  loading: null,
  error: null,
  message: null,
  brands: [],
  products: [],
};

export default initialUserBrandsState;
