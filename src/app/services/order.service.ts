import { HttpService } from "./base.service";
import { IResponseInterface } from "../interfaces/api-response.interface";
import {
  IOrderDetails,
  IOrderListing,
} from "../features/order/interfaces/order.interface";

class OrderService extends HttpService {
  private readonly prefix: string = "api/v1/user";

  getOrderListingHandler = (): Promise<
    IResponseInterface<{ orders: IOrderListing[] }>
  > => this.get(`${this.prefix}/order-listing`);

  getOrderDetailsHandler = (
    orderId: string
  ): Promise<IResponseInterface<{ order: IOrderDetails }>> =>
    this.get(`${this.prefix}/order-details/${orderId}`);
}

export const orderService = new OrderService();
