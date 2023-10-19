// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { ICategory } from "../features/category/interfaces/category.interface";

class CategoryService extends HttpService {
  private readonly prefix: string = "api/v1/multiadmin";

  addCategoryHandler = (
    data: ICategory
  ): Promise<IResponseInterface<{ category: ICategory }>> =>
    this.post(`${this.prefix}/category`, data);

  getAllCategoriesHandler = (): Promise<
    IResponseInterface<{ categories: ICategory[] }>
  > => this.get(`${this.prefix}/category`);

  deleteCategoryHandler = (
    id: string
  ): Promise<IResponseInterface<{ id: string }>> =>
    this.delete(`${this.prefix}/category/${id}`);
}

export const categoryService = new CategoryService();
