import { CertificateWhereInput } from "./CertificateWhereInput";
import { CertificateOrderByInput } from "./CertificateOrderByInput";

export type CertificateFindManyArgs = {
  where?: CertificateWhereInput;
  orderBy?: Array<CertificateOrderByInput>;
  skip?: number;
  take?: number;
};
