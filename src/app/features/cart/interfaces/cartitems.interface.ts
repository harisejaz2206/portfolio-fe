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

export interface ICart {}
