import initialAuthState from "../auth/auth.initialstate";
import { ICatalog } from "./interfaces/catalog.interface";

interface ICatalogState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  catalog?: ICatalog[] | null;
}

const initialCatalogState: ICatalogState = {
  loading: null,
  error: null,
  message: null,
  catalog: [],
};

export default initialCatalogState;
