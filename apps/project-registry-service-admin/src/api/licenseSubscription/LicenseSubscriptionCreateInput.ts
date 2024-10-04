import { SoftwareProjectCreateNestedManyWithoutLicenseSubscriptionsInput } from "./SoftwareProjectCreateNestedManyWithoutLicenseSubscriptionsInput";

export type LicenseSubscriptionCreateInput = {
  expiryDate?: Date | null;
  name?: string | null;
  softwareProjects?: SoftwareProjectCreateNestedManyWithoutLicenseSubscriptionsInput;
};
