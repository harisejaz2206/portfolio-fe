// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IUserCategoryListing } from "../features/userportal-category/interfaces/category.interface";

class UserCategoryService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  getAllCategoriesHandler = (): Promise<
    IResponseInterface<{ categories: IUserCategoryListing[] }>
  > => this.get(`${this.prefix}/category-listing`);
}

export const userCategoryService = new UserCategoryService();
