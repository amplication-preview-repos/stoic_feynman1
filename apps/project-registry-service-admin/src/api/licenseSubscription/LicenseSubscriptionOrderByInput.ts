import { SortOrder } from "../../util/SortOrder";

export type LicenseSubscriptionOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
