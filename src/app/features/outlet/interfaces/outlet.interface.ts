export interface IOutlet {
  _id?: string;
  outletName: string;
  adminName: string;
  adminEmail: string;
  adminPassword: string;
  adminNumber: string;
  address: string;
  latitude: string;
  longitude: string;
  taxType: string;
  taxValue: string;
  inventory?: string[];
  status?: boolean;
  isActive?: boolean;
  // inventory?: IProduct[];
  createdAt?: string;
  updatedAt?: string;
}
