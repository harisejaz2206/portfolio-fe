import { IOutlet } from "../../outlet/interfaces/outlet.interface";

export interface IAddProductBody {
  catalogItemId: string;
  quantity: number;
}

export interface IAddProductCatalogItemResponse {
  _id: string;
  name: string;
  quantity: number;
  originalPrice: number;
  salePrice: number;
  category: string;
  brand: string;
  storeId: string;
  images: string[];
}

export interface IAddProductOutletResponse {
  outlet: IOutlet;
}

// export interface IGetProductResponse {
//   products: {
//     catalogItem: IAddProductCatalogItemResponse;
//     quantity: number;
//   }[];
// }

export interface IGetProductResponse {
  catalogItem: IAddProductCatalogItemResponse;
  quantity: number;
}
