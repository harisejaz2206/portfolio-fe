import { IAddProductCatalogItemResponse } from "../../product/interfaces/product.interface";

export interface IOrderListing {
  _id: string;
  user: string;
  orderItem: string[];
  status: string;
  totalPrice: number;
  createdAt: string;
}

export interface IProductDetails {
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

interface IOrderItems {
  _id: string;
  productId: IProductDetails;
  quantity: number;
}

export interface IOrderDetails {
  _id: string;
  user: string;
  orderItems: IOrderItems[];
  status: string;
  totalPrice: number;
  createdAt: string;
}
