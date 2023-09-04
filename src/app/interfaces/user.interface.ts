export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: "user" | "sole-admin" | "multi-admin" | "super-admin";
}
