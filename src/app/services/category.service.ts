// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { ICategory } from "../interfaces/category.interface";

class CategoryService extends HttpService {
  private readonly prefix: string = "api/v1/multiadmin";

  addBrandHander = (
    data: ICategory
  ): Promise<IResponseInterface<{ category: ICategory }>> =>
    this.post(`${this.prefix}/category`, data);

  getAllBrandsHandler = (): Promise<
    IResponseInterface<{ categories: ICategory[] }>
  > => this.get(`${this.prefix}/category`);
}

export const categoryService = new CategoryService();
