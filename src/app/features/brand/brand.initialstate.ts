import initialAuthState from "../auth/auth.initialstate";
import { IBrand } from "./interfaces/brand.interface";

interface IBrandState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  brand?: IBrand[] | null;
}

const initialBrandState: IBrandState = {
  loading: null,
  error: null,
  message: null,
  brand: [],
};

export default initialBrandState;
