export interface IOnboard {
  businessName: string;
  businessWebsite: string;
  businessDescription: string;
  businessCategory: "ONLINE" | "PHYSICAL" | "ONLINE_AND_PHYSICAL";
  allowAIWebSearch: false;
}
