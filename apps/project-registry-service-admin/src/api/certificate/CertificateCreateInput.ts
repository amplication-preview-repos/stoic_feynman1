import { SoftwareProjectCreateNestedManyWithoutCertificatesInput } from "./SoftwareProjectCreateNestedManyWithoutCertificatesInput";

export type CertificateCreateInput = {
  expiryDate?: Date | null;
  name?: string | null;
  softwareProjects?: SoftwareProjectCreateNestedManyWithoutCertificatesInput;
};
