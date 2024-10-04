import { CertificateWhereUniqueInput } from "../certificate/CertificateWhereUniqueInput";
import { ComponentWhereUniqueInput } from "../component/ComponentWhereUniqueInput";
import { FrameworkWhereUniqueInput } from "../framework/FrameworkWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LibraryWhereUniqueInput } from "../library/LibraryWhereUniqueInput";
import { LicenseSubscriptionWhereUniqueInput } from "../licenseSubscription/LicenseSubscriptionWhereUniqueInput";
import { TechnologyWhereUniqueInput } from "../technology/TechnologyWhereUniqueInput";

export type SoftwareProjectWhereInput = {
  certificate?: CertificateWhereUniqueInput;
  component?: ComponentWhereUniqueInput;
  framework?: FrameworkWhereUniqueInput;
  handoverDate?: DateTimeNullableFilter;
  id?: StringFilter;
  library?: LibraryWhereUniqueInput;
  licenseSubscription?: LicenseSubscriptionWhereUniqueInput;
  technology?: TechnologyWhereUniqueInput;
  warrantyEndDate?: DateTimeNullableFilter;
  warrantyStartDate?: DateTimeNullableFilter;
};
