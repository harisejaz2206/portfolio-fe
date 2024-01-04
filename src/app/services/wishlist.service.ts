// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import {
  IAddWishlist,
  IDeleteWishlist,
  IWishlist,
} from "../features/wishlist/interfaces/wishlist.interface";

class WishlistService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  getWishlistHandler = (): Promise<
    IResponseInterface<{ wishlist: IWishlist[] }>
  > => this.get(`${this.prefix}/wishlist`);

  addWishlistHandler = (
    data: IAddWishlist
  ): Promise<IResponseInterface<void>> =>
    this.post(`${this.prefix}/wishlist`, data);

  deleteWishlistHandler = (
    data: IDeleteWishlist
  ): Promise<IResponseInterface<void>> =>
    this.delete(`${this.prefix}/wishlist`, data);

  // addCategoryHandler = (
  //   data: ICategory
  // ): Promise<IResponseInterface<{ category: ICategory }>> =>
  //   this.post(`${this.prefix}/category`, data);

  // deleteCategoryHandler = (
  //   id: string
  // ): Promise<IResponseInterface<{ id: string }>> =>
  // this.delete(`${this.prefix}/category/${id}`);
}

export const wishlistService = new WishlistService();
