export interface IProduct {
  _id: string;
  name: string;
  quantity: number;
  pricePerItem: number;
  brand: string;
  category: string;
  isFeatured: boolean;
  isPublished: boolean;
  images: string[];
}
