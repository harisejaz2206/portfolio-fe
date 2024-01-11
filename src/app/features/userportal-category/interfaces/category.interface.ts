export interface IUserCategoryListing {
  _id?: string;
  name: string;
  status: boolean;
  image: string;
  storeId: string;
}

export interface IUserPostCategoryProductListing {
  categoryId: string;
}
