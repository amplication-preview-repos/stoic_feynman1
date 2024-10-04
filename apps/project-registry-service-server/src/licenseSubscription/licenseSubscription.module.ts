import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LicenseSubscriptionModuleBase } from "./base/licenseSubscription.module.base";
import { LicenseSubscriptionService } from "./licenseSubscription.service";
import { LicenseSubscriptionController } from "./licenseSubscription.controller";
import { LicenseSubscriptionResolver } from "./licenseSubscription.resolver";

@Module({
  imports: [LicenseSubscriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [LicenseSubscriptionController],
  providers: [LicenseSubscriptionService, LicenseSubscriptionResolver],
  exports: [LicenseSubscriptionService],
})
export class LicenseSubscriptionModule {}
