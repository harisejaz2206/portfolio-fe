// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IStore } from "../features/store/interfaces/store.interface";
import { IUser } from "../interfaces/user.interface";

class StoreService extends HttpService {
  private readonly prefix: string = "api/v1/superadmin";

  addStoreHandler = (
    data: IStore
  ): Promise<IResponseInterface<{ store: IStore; user: IUser }>> =>
    this.post(`${this.prefix}/store`, data);

  getAllStoresHandler = (): Promise<IResponseInterface<{ stores: IStore[] }>> =>
    this.get(`${this.prefix}/store`);
}

export const storeService = new StoreService();
