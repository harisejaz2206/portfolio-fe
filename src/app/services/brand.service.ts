// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IBrand } from "../features/brand/interfaces/brand.interface";

class BrandService extends HttpService {
  private readonly prefix: string = "api/v1/multiadmin";

  addBrandHander = (
    data: IBrand
  ): Promise<IResponseInterface<{ brand: IBrand }>> =>
    this.post(`${this.prefix}/brand`, data);

  getAllBrandsHandler = (): Promise<IResponseInterface<{ brands: IBrand[] }>> =>
    this.get(`${this.prefix}/brand`);

  deleteBrandHandler = (
    id: string
  ): Promise<IResponseInterface<{ id: string }>> =>
    this.delete(`${this.prefix}/brand/${id}`);
}

export const brandService = new BrandService();
