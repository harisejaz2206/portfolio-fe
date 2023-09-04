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

  // forgotPasswordHandler = (
  //   data: IForgotPasswordInterface
  // ): Promise<IResponseInterface<{}>> =>
  //   this.post(`${this.prefix}/forgot-password`, data);

  // resetPasswordHandler = (
  //   data: IResetPasswordInterface
  // ): Promise<IResponseInterface<{}>> =>
  //   this.post(`${this.prefix}/reset-password`, data);

  // logoutUser = (): Promise<IResponseInterface> =>
  //   this.post(`${this.prefix}/logout`);

  // refreshToken = (): Promise<IResponseInterface<{ token: string }>> =>
  //   this.post(`${this.prefix}/refresh-token`);

  //   profileSetup = (
  //     data: IProfileSetupInterface
  //   ): Promise<IResponseInterface<{}>> => this.put(`user/setup-profile`, data);

  //   getUserProfile = (id: string): Promise<IResponseInterface<{}>> =>
  //     this.get(`user/${id}`);

  //   changePassword = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.put(`user/update-password`, data);

  //   sendEmailOTP = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.put(`user/send-email-otp`, data);

  //   verifyEmailOTP = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.put(`user/update-email`, data);

  //   sendPhoneOTP = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.put(`user/send-phone-otp`, data);

  //   verifyPhoneOTP = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.put(`user/update-phone`, data);

  //   searchUserByEmail = (
  //     query: string,
  //     id: string
  //   ): Promise<IResponseInterface<{}>> =>
  //     this.get(`user/search?organizationId=${id}&query=${query}`);

  //   globalUserSearch = (query: string): Promise<IResponseInterface<{}>> =>
  //     this.get(`user/global-search?query=${query}&page=1&limit=25`);

  //   globalUpdateSearch = (
  //     page: number,
  //     query: string
  //   ): Promise<IResponseInterface<{}>> =>
  //     this.get(`post/all?query=${query}&page=${page}&limit=25`);

  //   sendOrganisationSimpleInvite = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.post(`organization-member/send/simple-invite`, data);

  //   sendInviteToNonSystemUser = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.post(`organization-member/send/invite`, data);

  //   verifyEmail2FA = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.post(`${this.prefix}/verify-2fa`, data);

  //   resendEmail2FA = (data: any): Promise<IResponseInterface<{}>> =>
  //     this.post(`${this.prefix}/resend-2fa`, data);

  //   deleteAccount = (): Promise<IResponseInterface<{}>> => this.delete(`user`);
}
export const authService = new AuthService();
