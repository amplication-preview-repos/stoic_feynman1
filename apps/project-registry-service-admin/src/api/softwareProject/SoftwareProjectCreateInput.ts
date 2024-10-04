import { CertificateWhereUniqueInput } from "../certificate/CertificateWhereUniqueInput";
import { ComponentWhereUniqueInput } from "../component/ComponentWhereUniqueInput";
import { FrameworkWhereUniqueInput } from "../framework/FrameworkWhereUniqueInput";
import { LibraryWhereUniqueInput } from "../library/LibraryWhereUniqueInput";
import { LicenseSubscriptionWhereUniqueInput } from "../licenseSubscription/LicenseSubscriptionWhereUniqueInput";
import { TechnologyWhereUniqueInput } from "../technology/TechnologyWhereUniqueInput";

export type SoftwareProjectCreateInput = {
  certificate?: CertificateWhereUniqueInput | null;
  component?: ComponentWhereUniqueInput | null;
  framework?: FrameworkWhereUniqueInput | null;
  handoverDate?: Date | null;
  library?: LibraryWhereUniqueInput | null;
  licenseSubscription?: LicenseSubscriptionWhereUniqueInput | null;
  technology?: TechnologyWhereUniqueInput | null;
  warrantyEndDate?: Date | null;
  warrantyStartDate?: Date | null;
};
