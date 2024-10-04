import { SortOrder } from "../../util/SortOrder";

export type SoftwareProjectOrderByInput = {
  certificateId?: SortOrder;
  componentId?: SortOrder;
  createdAt?: SortOrder;
  frameworkId?: SortOrder;
  handoverDate?: SortOrder;
  id?: SortOrder;
  libraryId?: SortOrder;
  licenseSubscriptionId?: SortOrder;
  technologyId?: SortOrder;
  updatedAt?: SortOrder;
  warrantyEndDate?: SortOrder;
  warrantyStartDate?: SortOrder;
};
