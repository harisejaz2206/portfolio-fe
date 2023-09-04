// src/auth/auth.initialstate.ts
// import { IOnboard } from "./interfaces/onboard.interface";
import { IUser } from "../../interfaces/user.interface";

interface IAuthState {
  loading: boolean | null;
  user?: IUser | null;
  token?: string | null;
  error?: string | null;
  message?: string | null;
  isLoading?: boolean | null;
}

const initialAuthState: IAuthState = {
  loading: null,
  user: null,
  token: null,
  error: null,
  message: null,
};

export default initialAuthState;
