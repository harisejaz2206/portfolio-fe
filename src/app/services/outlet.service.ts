// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IUser } from "../interfaces/user.interface";
import { ILogInInterface } from "../features/auth/interfaces/login.interface";
import { ISignUpInterface } from "../features/auth/interfaces/sign-up.interface";
import { IForgotPasswordInterface } from "../features/auth/interfaces/forgot-password.interface";
import { IResetPasswordInterface } from "../features/auth/interfaces/reset-password.interface";
import { IProfileSetupInterface } from "../features/auth/interfaces/profile-setup.interface";
import { IToken } from "../features/auth/interfaces/token.interface";
import { ISocialAuthInterface } from "../features/auth/interfaces/socialauth-interface";
import { IOutlet } from "../features/outlet/interfaces/outlet.interface";

class OutletService extends HttpService {
  private readonly prefix: string = "api/v1";

  addOutletHander = (
    data: IOutlet
  ): Promise<IResponseInterface<{ outlet: IOutlet }>> =>
    this.post(`${this.prefix}/outlet`, data);

  getAllOutletsHandler = (): Promise<
    IResponseInterface<{ outlets: IOutlet[] }>
  > => this.get(`${this.prefix}/outlets`);
}

export const outletService = new OutletService();
