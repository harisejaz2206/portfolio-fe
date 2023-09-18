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
  inventory?: string[]; // Add this line if you're storing IDs
  createdAt?: string;
  updatedAt?: string;
}
