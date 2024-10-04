import { LicenseSubscription as TLicenseSubscription } from "../api/licenseSubscription/LicenseSubscription";

export const LICENSESUBSCRIPTION_TITLE_FIELD = "name";

export const LicenseSubscriptionTitle = (
  record: TLicenseSubscription
): string => {
  return record.name?.toString() || String(record.id);
};
