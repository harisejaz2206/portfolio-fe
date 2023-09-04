export type TProvider = "GOOGLE" | "FACEBOOK";

export interface ISocialAuthInterface {
  name: string;
  email: string;
  providerId: string;
  provider: TProvider;
}
