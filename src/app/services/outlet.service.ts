// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IOutlet } from "../features/outlet/interfaces/outlet.interface";

class OutletService extends HttpService {
  private readonly prefix: string = "api/v1/multiadmin";

  addOutletHander = (
    data: IOutlet
  ): Promise<IResponseInterface<{ outlet: IOutlet }>> =>
    this.post(`${this.prefix}/outlet`, data);

  getAllOutletsHandler = (): Promise<
    IResponseInterface<{ outlets: IOutlet[] }>
  > => this.get(`${this.prefix}/outlet`);
}

export const outletService = new OutletService();
