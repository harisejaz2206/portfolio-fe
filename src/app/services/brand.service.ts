// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IBrand } from "../interfaces/brand.interface";

class BrandService extends HttpService {
  private readonly prefix: string = "api/v1/multiadmin";

  addBrandHander = (
    data: IBrand
  ): Promise<IResponseInterface<{ brand: IBrand }>> =>
    this.post(`${this.prefix}/brand`, data);

  getAllBrandsHandler = (): Promise<IResponseInterface<{ brands: IBrand[] }>> =>
    this.get(`${this.prefix}/brand`);
}

export const brandService = new BrandService();
