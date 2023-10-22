export interface ICatalog {
  _id?: string;
  name: string;
  quantity: number;
  originalPrice: number;
  salePrice: number;
  category: string;
  brand: string;
  images: string[];
}
