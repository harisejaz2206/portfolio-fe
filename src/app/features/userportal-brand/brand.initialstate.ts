import { IUserBrandListing } from "./interfaces/brand.interface";

interface IBrandsState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  brands?: IUserBrandListing[] | null;
}

const initialUserBrandsState: IBrandsState = {
  loading: null,
  error: null,
  message: null,
  brands: [],
};

export default initialUserBrandsState;
