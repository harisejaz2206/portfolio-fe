import initialAuthState from "../auth/auth.initialstate";
import { IBanner } from "./interfaces/banner.interface";

interface IBannerState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  banner?: IBanner[] | null;
}

const initialBannerState: IBannerState = {
  loading: null,
  error: null,
  message: null,
  banner: [],
};

export default initialBannerState;
