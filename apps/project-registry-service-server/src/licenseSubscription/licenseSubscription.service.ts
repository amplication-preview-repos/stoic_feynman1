import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LicenseSubscriptionServiceBase } from "./base/licenseSubscription.service.base";

@Injectable()
export class LicenseSubscriptionService extends LicenseSubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
