import { IGetUsers } from "./interfaces/user.interface";

interface IUsersState {
  loading: boolean | null;
  error?: string | null;
  message?: string | null;
  users?: IGetUsers[] | null;
}

const initialUsersState: IUsersState = {
  loading: null,
  error: null,
  message: null,
  users: [],
};

export default initialUsersState;
