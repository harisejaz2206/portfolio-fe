// user.service.ts
import { RootState } from "../../store/rootReducer";
// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IUser } from "../interfaces/user.interface";

class UserService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  // onboardHandler = (
  //   data: IOnboard
  // ): Promise<IResponseInterface<{ user: IUser }>> =>
  //   this.put(`${this.prefix}/onboard`, data);
}

export const userService = new UserService();
