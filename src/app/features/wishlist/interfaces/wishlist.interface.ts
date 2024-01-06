interface ICategory {
  _id: string;
  name: string;
}

interface IBrand {
  _id: string;
  name: string;
}

export interface IWishlist {
  _id: string;
  name: string;
  productId: string;
  quantity: number;
  originalPrice: number;
  salePrice: number;
  category: ICategory;
  brand: IBrand;
  storeId: string;
  images: string[];
}

export interface IAddWishlist {
  productId: string;
}

export interface IDeleteWishlist {
  productId: string;
}
