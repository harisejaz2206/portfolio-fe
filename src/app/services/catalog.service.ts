// catalog.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { IBrand } from "../features/brand/interfaces/brand.interface";
import { ICatalog } from "../features/catalog/interfaces/catalog.interface";

class CatalogService extends HttpService {
  private readonly prefix: string = "api/v1/multiadmin";

  addCatalogHander = (
    data: ICatalog
  ): Promise<IResponseInterface<{ catalog: ICatalog }>> =>
    this.post(`${this.prefix}/catalog`, data);

  getAllCatalogsHandler = (): Promise<
    IResponseInterface<{ catalogItems: ICatalog[] }>
  > => this.get(`${this.prefix}/catalog`);

  deleteCatalogHandler = (
    id: string
  ): Promise<IResponseInterface<{ id: string }>> =>
    this.delete(`${this.prefix}/catalog/${id}`);
}

export const catalogService = new CatalogService();
