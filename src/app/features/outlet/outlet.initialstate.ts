import { IOutlet } from "./interfaces/outlet.interface";

interface IOutletState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  outlet?: IOutlet[] | null;
}

const initialOutletState: IOutletState = {
  loading: null,
  error: null,
  message: null,
  outlet: [],
};

export default initialOutletState;
