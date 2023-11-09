// product.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import {
  IAddProductBody,
  IAddProductCatalogItemResponse,
  IGetProductResponse,
} from "../features/product/interfaces/product.interface";
import { IOutlet } from "../features/outlet/interfaces/outlet.interface";

class ProductService extends HttpService {
  private readonly prefix: string = "api/v1/solechain";

  addProductHandler = (
    data: IAddProductBody
  ): Promise<
    IResponseInterface<{
      outlet: IOutlet;
      catalogItem: IAddProductCatalogItemResponse;
    }>
  > => this.post(`${this.prefix}/product`, data);

  getAllProductsHandler = (): Promise<
    IResponseInterface<{ products: IGetProductResponse[] }>
  > => this.get(`${this.prefix}/product`);
}

export const productService = new ProductService();

// deleteProductHandler = (
//   id: string
// ): Promise<IResponseInterface<{ id: string }>> =>
//   this.delete(`${this.prefix}/product/${id}`);
