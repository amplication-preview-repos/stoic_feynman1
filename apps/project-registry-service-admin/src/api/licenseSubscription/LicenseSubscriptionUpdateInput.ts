import { SoftwareProjectUpdateManyWithoutLicenseSubscriptionsInput } from "./SoftwareProjectUpdateManyWithoutLicenseSubscriptionsInput";

export type LicenseSubscriptionUpdateInput = {
  expiryDate?: Date | null;
  name?: string | null;
  softwareProjects?: SoftwareProjectUpdateManyWithoutLicenseSubscriptionsInput;
};
