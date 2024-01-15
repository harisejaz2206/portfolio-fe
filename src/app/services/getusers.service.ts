// product.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IGetUsers } from "../features/users/interfaces/user.interface";

class GetUsersService extends HttpService {
  private readonly prefix: string = "api/v1/auth";

  getAllUsersHandler = (): Promise<
    IResponseInterface<{ users: IGetUsers[] }>
  > => this.get(`${this.prefix}/users`);
}

export const usersService = new GetUsersService();
