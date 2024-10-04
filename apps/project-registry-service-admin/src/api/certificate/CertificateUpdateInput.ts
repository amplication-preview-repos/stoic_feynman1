import { SoftwareProjectUpdateManyWithoutCertificatesInput } from "./SoftwareProjectUpdateManyWithoutCertificatesInput";

export type CertificateUpdateInput = {
  expiryDate?: Date | null;
  name?: string | null;
  softwareProjects?: SoftwareProjectUpdateManyWithoutCertificatesInput;
};
