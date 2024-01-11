import { IUserProductListing } from "../cart/interfaces/cartitems.interface";
import { IUserCategoryListing } from "./interfaces/category.interface";

interface ICategoriesState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  categories?: IUserCategoryListing[] | null;
  products?: IUserProductListing[] | null;
}

const initialUserCategoriesState: ICategoriesState = {
  loading: null,
  error: null,
  message: null,
  categories: [],
  products: [],
};

export default initialUserCategoriesState;
