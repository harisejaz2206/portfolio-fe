// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import {
  IUserCategoryListing,
  IUserPostCategoryProductListing,
} from "../features/userportal-category/interfaces/category.interface";
import { IUserProductListing } from "../features/cart/interfaces/cartitems.interface";

class UserCategoryService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  getAllCategoriesHandler = (): Promise<
    IResponseInterface<{ categories: IUserCategoryListing[] }>
  > => this.get(`${this.prefix}/category-listing`);

  getCategoryProductListingHandler = (
    data: IUserPostCategoryProductListing
  ): Promise<IResponseInterface<{ products: IUserProductListing[] }>> =>
    this.post(`${this.prefix}/brand-product-listing`, data);
}

export const userCategoryService = new UserCategoryService();
