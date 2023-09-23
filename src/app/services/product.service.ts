// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IProduct } from "../interfaces/product.interface";

class ProductService extends HttpService {
  private readonly prefix: string = "api/v1/multiadmin";

  addProductHander = (
    data: IProduct
  ): Promise<IResponseInterface<{ product: IProduct }>> =>
    this.post(`${this.prefix}/product`, data);

  //   getProductsOfOutletHandler = (): Promise<
  //     IResponseInterface<{ products: IProduct[] }>
  //   > => this.get(`${this.prefix}/product`);

  getAllBrandsHandler = (query?: {
    outletName?: string;
  }): Promise<IResponseInterface<{ products: IProduct[] }>> => {
    let url = `${this.prefix}/product`;

    // Append the query string to the URL if an outletName is provided
    if (query && query.outletName) {
      url += `?outletName=${query.outletName}`;
    }

    return this.get(url);
  };
}

export const productService = new ProductService();
