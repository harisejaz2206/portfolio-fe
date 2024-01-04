export interface IUserProductListing {
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

export interface IAddToCart {
  productId: string;
}
export interface IDeleteFromCart {
  productId: string;
}

export interface IUserCart {
  productId: string;
  productName: string;
  quantity: number;
  salePrice: number;
  totalPrice: number;
}
