import { LicenseSubscriptionWhereInput } from "./LicenseSubscriptionWhereInput";
import { LicenseSubscriptionOrderByInput } from "./LicenseSubscriptionOrderByInput";

export type LicenseSubscriptionFindManyArgs = {
  where?: LicenseSubscriptionWhereInput;
  orderBy?: Array<LicenseSubscriptionOrderByInput>;
  skip?: number;
  take?: number;
};
