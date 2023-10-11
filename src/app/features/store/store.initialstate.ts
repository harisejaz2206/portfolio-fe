import { IStore } from "./interfaces/store.interface";

interface IStoreState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  store?: IStore[] | null;
}

const initialStoreState: IStoreState = {
  loading: null,
  error: null,
  message: null,
  store: [],
};

export default initialStoreState;
