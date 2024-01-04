import { IGetProductResponse } from "./interfaces/product.interface";

interface IProductState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  product?: IGetProductResponse[] | null;
}

const initialProductState: IProductState = {
  loading: null,
  error: null,
  message: null,
  product: [],
};

export default initialProductState;
