import initialAuthState from "../auth/auth.initialstate";
import { ICategory } from "./interfaces/category.interface";

interface ICategoryState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  category?: ICategory[] | null;
}

const initialCategoryState: ICategoryState = {
  loading: null,
  error: null,
  message: null,
  category: [],
};

export default initialCategoryState;
