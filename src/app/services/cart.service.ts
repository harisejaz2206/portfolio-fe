// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import {
  IAddToCart,
  IDeleteFromCart,
  IUserCart,
  IUserProductListing,
} from "../features/cart/interfaces/cartitems.interface";

class CartService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  getUserProductListingHandler = (): Promise<
    IResponseInterface<{ products: IUserProductListing[] }>
  > => this.get(`${this.prefix}/product-listing2`);

  addToCartHandler = (data: IAddToCart): Promise<IResponseInterface<void>> =>
    this.post(`${this.prefix}/cart`, data);

  deleteFromCartHandler = (
    data: IDeleteFromCart
  ): Promise<IResponseInterface<void>> =>
    this.delete(`${this.prefix}/cart`, data);

  getUserCartHandler = (): Promise<
    IResponseInterface<{
      cartItems: IUserCart[];
      totalPrice: number;
      totalQuantity: number;
    }>
  > => this.get(`${this.prefix}/cart`);

  // TODO: Update user cart API
}

export const cartService = new CartService();
