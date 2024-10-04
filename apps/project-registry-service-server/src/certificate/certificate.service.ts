import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CertificateServiceBase } from "./base/certificate.service.base";

@Injectable()
export class CertificateService extends CertificateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
