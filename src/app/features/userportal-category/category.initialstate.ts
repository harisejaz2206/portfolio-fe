import { IUserCategoryListing } from "./interfaces/category.interface";

interface ICategoriesState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  categories?: IUserCategoryListing[] | null;
}

const initialUserCategoriesState: ICategoriesState = {
  loading: null,
  error: null,
  message: null,
  categories: [],
};

export default initialUserCategoriesState;
