// banner.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IBanner } from "../features/banner/interfaces/banner.interface";

class BannerService extends HttpService {
  private readonly prefix: string = "api/v1/multiadmin";

  addBannerHander = (
    data: IBanner
  ): Promise<IResponseInterface<{ banner: IBanner }>> =>
    this.post(`${this.prefix}/banner`, data);

  getAllBannersHandler = (): Promise<
    IResponseInterface<{ banners: IBanner[] }>
  > => this.get(`${this.prefix}/banner`);

  deleteBrandHandler = (
    id: string
  ): Promise<IResponseInterface<{ id: string }>> =>
    this.delete(`${this.prefix}/banner/${id}`);
}

export const bannerService = new BannerService();
