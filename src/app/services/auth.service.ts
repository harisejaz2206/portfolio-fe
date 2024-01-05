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
import { IToken } from "../features/auth/interfaces/token.interface";
import { ISocialAuthInterface } from "../features/auth/interfaces/socialauth-interface";

class AuthService extends HttpService {
  private readonly prefix: string = "api/v1/auth";

  signupHandler = (
    data: ISignUpInterface
  ): Promise<IResponseInterface<{ token: IToken; user: IUser }>> =>
    this.post(`${this.prefix}/register`, data);

  loginHandler = (
    data: ILogInInterface
  ): Promise<IResponseInterface<{ token: IToken; user: IUser }>> =>
    this.post(`${this.prefix}/login`, data);

  forgotPasswordHandler = (
    data: IForgotPasswordInterface
  ): Promise<IResponseInterface<{}>> =>
    this.post(`${this.prefix}/forgot-password`, data);

  resetPasswordHandler = (
    data: IResetPasswordInterface
  ): Promise<IResponseInterface<{}>> =>
    this.post(`${this.prefix}/reset-password`, data);

  socialAuthHandler = (
    data: ISocialAuthInterface
  ): Promise<IResponseInterface<{ token: IToken; user: IUser }>> =>
    this.post(`${this.prefix}/social`, data);
}
export const authService = new AuthService();
