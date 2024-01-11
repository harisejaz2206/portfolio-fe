// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import {
  IUserBrandListing,
  IUserPostBrandProductListing,
} from "../features/userportal-brand/interfaces/brand.interface";
import { IUserProductListing } from "../features/cart/interfaces/cartitems.interface";

class UserBrandService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  getAllBrandsHandler = (): Promise<
    IResponseInterface<{ brands: IUserBrandListing[] }>
  > => this.get(`${this.prefix}/brand-listing`);

  getBrandProductListingHandler = (
    data: IUserPostBrandProductListing
  ): Promise<IResponseInterface<{ products: IUserProductListing[] }>> =>
    this.post(`${this.prefix}/brand-product-listing`, data);
}

export const userBrandService = new UserBrandService();
