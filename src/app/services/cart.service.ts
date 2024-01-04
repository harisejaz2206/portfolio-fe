// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IUserProductListing } from "../features/cart/interfaces/cartitems.interface";

class CartService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  getUserProductListingHandler = (): Promise<
    IResponseInterface<{ cartItems: IUserProductListing[] }>
  > => this.get(`${this.prefix}/product-listing2`);

  // addCategoryHandler = (
  //   data: ICategory
  // ): Promise<IResponseInterface<{ category: ICategory }>> =>
  //   this.post(`${this.prefix}/category`, data);

  // deleteCategoryHandler = (
  //   id: string
  // ): Promise<IResponseInterface<{ id: string }>> =>
  // this.delete(`${this.prefix}/category/${id}`);
}

export const cartService = new CartService();
