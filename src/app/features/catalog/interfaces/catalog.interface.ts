export interface ICatalog {
  _id?: string;
  name: string;
  quantity: string;
  originalPrice: string;
  salePrice: string;
  category: string;
  brand: string;
  images: string[];
}

export interface IGetCategory {
  _id: string;
  name: string;
}

export interface IGetBrand {
  _id: string;
  name: string;
}

export interface IGetCatalog {
  _id: string;
  name: string;
  quantity: number;
  originalPrice: number;
  salePrice: number;
  category: IGetCategory | null;
  brand: IGetBrand | null;
  storeId: string;
  images: string[];
}
