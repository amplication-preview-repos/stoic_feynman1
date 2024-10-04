import { Certificate as TCertificate } from "../api/certificate/Certificate";

export const CERTIFICATE_TITLE_FIELD = "name";

export const CertificateTitle = (record: TCertificate): string => {
  return record.name?.toString() || String(record.id);
};
