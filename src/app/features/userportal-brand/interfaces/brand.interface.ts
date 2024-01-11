export interface IUserBrandListing {
  _id?: string;
  name: string;
  status: boolean;
  image: string;
  storeId?: string;
}

export interface IUserPostBrandProductListing {
  brandId: string;
}
