// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IUserBrandListing } from "../features/userportal-brand/interfaces/brand.interface";

class UserBrandService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  getAllBrandsHandler = (): Promise<
    IResponseInterface<{ brands: IUserBrandListing[] }>
  > => this.get(`${this.prefix}/brand-listing`);
}

export const userBrandService = new UserBrandService();
